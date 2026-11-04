const DATABASE_NAME = "bim-ar-projects";
const DATABASE_VERSION = 1;
const PROJECTS_STORE = "projects";
const projectStatuses = ["draft", "submitted", "approved"];
const localModelUrls = new Map();

export function validateProjects(data) {
  if (!Array.isArray(data)) {
    throw new Error("Os dados dos projetos têm de ser uma lista.");
  }

  const ids = new Set();
  return data.map((project, index) => {
    if (
      !project ||
      typeof project.id !== "string" ||
      !/^[A-Za-z0-9-]+$/.test(project.id) ||
      ids.has(project.id) ||
      typeof project.name !== "string" ||
      !project.name.trim() ||
      typeof project.status !== "string" ||
      !projectStatuses.includes(project.status) ||
      !Array.isArray(project.coords) ||
      project.coords.length !== 2 ||
      !project.coords.every((coordinate) => Number.isFinite(coordinate)) ||
      Math.abs(project.coords[0]) > 90 ||
      Math.abs(project.coords[1]) > 180 ||
      !(
        project.modelUrl === null ||
        (typeof project.modelUrl === "string" &&
          /^models\/[A-Za-z0-9._/-]+\.(glb|gltf)$/i.test(project.modelUrl) &&
          !project.modelUrl.split("/").includes(".."))
      ) ||
      ["description", "responsible", "fileName"].some(
        (field) =>
          project[field] !== undefined && typeof project[field] !== "string",
      )
    ) {
      throw new Error(`Dados inválidos no projeto ${index + 1}.`);
    }

    ids.add(project.id);
    return {
      id: project.id,
      name: project.name.trim(),
      description: project.description?.trim() || "",
      responsible: project.responsible?.trim() || "",
      status: project.status,
      coords: [...project.coords],
      modelUrl: project.modelUrl,
      ...(project.fileName ? { fileName: project.fileName } : {}),
    };
  });
}

export function getModelUrl(modelPath) {
  if (!modelPath) return null;
  if (modelPath.startsWith("blob:")) return modelPath;
  const baseUrl = new URL(import.meta.env.BASE_URL, window.location.origin);
  return new URL(modelPath, baseUrl).href;
}

export async function loadProjects() {
  const modelsUrl = new URL(
    "models.json",
    new URL(import.meta.env.BASE_URL, window.location.origin),
  );
  const response = await fetch(modelsUrl);
  if (!response.ok) {
    throw new Error(
      `Não foi possível carregar os projetos (${response.status}).`,
    );
  }

  const publishedProjects = validateProjects(await response.json());
  const localProjects = await loadLocalProjects();
  const ids = new Set(publishedProjects.map((project) => project.id));
  if (localProjects.some((project) => ids.has(project.id))) {
    throw new Error("Existem identificadores repetidos nos projetos locais.");
  }

  return [...publishedProjects, ...localProjects];
}

export async function loadLocalProjects() {
  const records = await readAllLocalRecords();
  return records.map(({ project, modelBlob }) => {
    const [validatedProject] = validateProjects([project]);
    return {
      ...validatedProject,
      localModel: Boolean(modelBlob),
      modelUrl: modelBlob
        ? getOrCreateModelUrl(validatedProject.id, modelBlob)
        : null,
    };
  });
}

export async function saveLocalProject(project, modelBlob, ifcBlob) {
  const [validatedProject] = validateProjects([project]);
  if (!(modelBlob instanceof Blob) || modelBlob.size === 0) {
    throw new Error("O modelo GLB convertido não é válido.");
  }
  if (!(ifcBlob instanceof Blob) || ifcBlob.size === 0) {
    throw new Error("O ficheiro IFC original não é válido.");
  }

  const record = {
    id: validatedProject.id,
    project: validatedProject,
    modelBlob,
    ifcBlob,
  };

  try {
    await writeLocalRecord(record);
  } catch (error) {
    if (error?.cause?.name === "ConstraintError") {
      throw new Error("Já existe um projeto com este identificador.", {
        cause: error,
      });
    }
    throw error;
  }

  return {
    ...validatedProject,
    localModel: true,
    modelUrl: getOrCreateModelUrl(validatedProject.id, modelBlob),
  };
}

export async function getLocalIfcBlob(projectId) {
  const record = await readLocalRecord(projectId);
  return record?.ifcBlob || null;
}

function openDatabase() {
  if (!globalThis.indexedDB) {
    return Promise.reject(
      new Error("Este navegador não disponibiliza o armazenamento IndexedDB."),
    );
  }

  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DATABASE_NAME, DATABASE_VERSION);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(PROJECTS_STORE)) {
        request.result.createObjectStore(PROJECTS_STORE, { keyPath: "id" });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(
        new Error("Não foi possível abrir o armazenamento local.", {
          cause: request.error,
        }),
      );
    request.onblocked = () =>
      reject(
        new Error(
          "O armazenamento local está bloqueado por outra versão aberta da aplicação.",
        ),
      );
  });
}

async function readAllLocalRecords() {
  const database = await openDatabase();
  const transaction = database.transaction(PROJECTS_STORE, "readonly");
  const result = requestResult(transaction.objectStore(PROJECTS_STORE).getAll());
  const complete = transactionResult(transaction);
  try {
    const [records] = await Promise.all([result, complete]);
    return records;
  } finally {
    database.close();
  }
}

async function readLocalRecord(projectId) {
  const database = await openDatabase();
  const transaction = database.transaction(PROJECTS_STORE, "readonly");
  const result = requestResult(
    transaction.objectStore(PROJECTS_STORE).get(projectId),
  );
  const complete = transactionResult(transaction);
  try {
    const [record] = await Promise.all([result, complete]);
    return record;
  } finally {
    database.close();
  }
}

async function writeLocalRecord(record) {
  const database = await openDatabase();
  const transaction = database.transaction(PROJECTS_STORE, "readwrite");
  const complete = transactionResult(transaction);
  try {
    transaction.objectStore(PROJECTS_STORE).add(record);
    await complete;
  } finally {
    database.close();
  }
}

function requestResult(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () =>
      reject(
        new Error("Não foi possível ler o armazenamento local.", {
          cause: request.error,
        }),
      );
  });
}

function transactionResult(transaction) {
  return new Promise((resolve, reject) => {
    transaction.oncomplete = () => resolve();
    transaction.onabort = transaction.onerror = () =>
      reject(
        new Error(
          "Não foi possível concluir a operação no armazenamento local.",
          { cause: transaction.error },
        ),
      );
  });
}

function getOrCreateModelUrl(projectId, modelBlob) {
  if (!localModelUrls.has(projectId)) {
    localModelUrls.set(projectId, URL.createObjectURL(modelBlob));
  }
  return localModelUrls.get(projectId);
}
