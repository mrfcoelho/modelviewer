import { getLocalIfcBlob, getModelUrl } from "./project-data.js";

let cachedProjectId = null;
let cachedStore = null;
const pendingStores = new Map();

export async function getIfcElementInfo(project, expressId) {
  const store = await getStore(project);
  const {
    extractAllEntityAttributes,
    extractPropertiesOnDemand,
    extractQuantitiesOnDemand,
  } = await import("@ifc-lite/parser");

  return {
    expressId,
    type: store.entities.getTypeName(expressId) || "",
    attributes: extractAllEntityAttributes(store, expressId),
    propertySets: extractPropertiesOnDemand(store, expressId),
    quantitySets: extractQuantitiesOnDemand(store, expressId),
  };
}

async function getStore(project) {
  if (cachedProjectId === project.id) return cachedStore;
  if (pendingStores.has(project.id)) return pendingStores.get(project.id);

  cachedProjectId = null;
  cachedStore = null;
  const loading = loadStore(project);
  pendingStores.set(project.id, loading);
  try {
    const store = await loading;
    cachedProjectId = project.id;
    cachedStore = store;
    return store;
  } finally {
    pendingStores.delete(project.id);
  }
}

async function loadStore(project) {
  let file;
  if (project.localModel) {
    file = await getLocalIfcBlob(project.id);
  } else if (project.ifcUrl) {
    const response = await fetch(getModelUrl(project.ifcUrl));
    if (!response.ok) {
      throw new Error(
        `Não foi possível carregar o IFC original (${response.status}).`,
      );
    }
    file = await response.blob();
  }

  if (!file) {
    throw new Error(
      "O ficheiro IFC original não está disponível para este projeto.",
    );
  }

  const { IfcParser } = await import("@ifc-lite/parser");
  return new IfcParser().parseColumnar(await file.arrayBuffer());
}
