import { getLocalIfcBlob } from "./project-data.js";

let cachedProjectId = null;
let cachedStore = null;
const pendingStores = new Map();

export async function getIfcElementInfo(projectId, expressId) {
  const store = await getStore(projectId);
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

async function getStore(projectId) {
  if (cachedProjectId === projectId) return cachedStore;
  if (pendingStores.has(projectId)) return pendingStores.get(projectId);

  cachedProjectId = null;
  cachedStore = null;
  const loading = loadStore(projectId);
  pendingStores.set(projectId, loading);
  try {
    const store = await loading;
    cachedProjectId = projectId;
    cachedStore = store;
    return store;
  } finally {
    pendingStores.delete(projectId);
  }
}

async function loadStore(projectId) {
  const file = await getLocalIfcBlob(projectId);
  if (!file) {
    throw new Error(
      "O ficheiro IFC original já não está disponível neste navegador.",
    );
  }

  const { IfcParser } = await import("@ifc-lite/parser");
  return new IfcParser().parseColumnar(await file.arrayBuffer());
}
