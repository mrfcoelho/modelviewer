const SESSION_PROJECTS_KEY = "bim-ar:submitted-projects";
const projectStatuses = ["draft", "submitted", "approved"];

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
    throw new Error(`Não foi possível carregar os projetos (${response.status}).`);
  }

  const publishedProjects = validateProjects(await response.json());
  const localProjects = loadLocalProjects();
  const ids = new Set(publishedProjects.map((project) => project.id));
  if (localProjects.some((project) => ids.has(project.id))) {
    throw new Error("Existem identificadores repetidos nos projetos desta sessão.");
  }

  return [...publishedProjects, ...localProjects];
}

export function loadLocalProjects() {
  const storedProjects = sessionStorage.getItem(SESSION_PROJECTS_KEY);
  if (!storedProjects) return [];

  let parsedProjects;
  try {
    parsedProjects = JSON.parse(storedProjects);
  } catch (error) {
    throw new Error("Os projetos guardados nesta sessão não são válidos.", {
      cause: error,
    });
  }

  return validateProjects(parsedProjects);
}

export function saveLocalProject(project) {
  const localProjects = loadLocalProjects();
  const [validatedProject] = validateProjects([project]);
  if (localProjects.some(({ id }) => id === validatedProject.id)) {
    throw new Error("Já existe um projeto com este identificador nesta sessão.");
  }

  sessionStorage.setItem(
    SESSION_PROJECTS_KEY,
    JSON.stringify([...localProjects, validatedProject]),
  );
  return validatedProject;
}
