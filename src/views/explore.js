import "leaflet/dist/leaflet.css";
import { getModelUrl } from "../services/project-data.js";
import { getIfcElementInfo } from "../services/ifc-properties.js";
import markerIcon2xUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

const arModes = ["webxr", "scene-viewer", "quick-look"];
let leafletMap = null;
let mapCenter = null;
let mapZoom = null;
let activeCleanup = null;
let renderVersion = 0;

const statusLabels = {
  draft: "Rascunho",
  submitted: "Submetido",
  approved: "Aprovado",
};

export function cleanupExplore() {
  renderVersion += 1;
  activeCleanup?.();
  activeCleanup = null;

  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }
}

export async function renderExplore(app, projects, navigate) {
  cleanupExplore();
  const L = await import("leaflet");
  if (location.hash !== "#/explorar") return;

  const page = document.createElement("main");
  page.className = "explore-page";
  const header = createPageHeader(navigate);
  const mapElement = document.createElement("div");
  mapElement.id = "map";
  mapElement.setAttribute("aria-label", "Mapa dos projetos de construção");
  page.append(header, mapElement);
  app.replaceChildren(page);

  leafletMap = L.map(mapElement);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(leafletMap);
  leafletMap.setView(
    mapCenter || [41.45330011034379, -8.28837129166596],
    mapZoom || 13,
  );

  projects.forEach((project) => {
    const marker = L.marker(project.coords, {
      icon: createMarkerIcon(L),
    }).addTo(leafletMap);
    marker.bindPopup(createProjectPopup(project, navigate));
  });

  const centerControl = L.control({ position: "bottomright" });
  centerControl.onAdd = () => {
    const button = L.DomUtil.create("button", "leaflet-bar center-control");
    button.type = "button";
    button.textContent = "Localizar-me";
    button.title = "Centrar o mapa na minha localização";
    L.DomEvent.disableClickPropagation(button);
    button.addEventListener("click", () => locateUser(L, button));
    return button;
  };
  centerControl.addTo(leafletMap);
}

export async function renderAR(app, project, arMode, navigate, floorKey = null) {
  cleanupExplore();
  const floorQuery = floorKey ? `?floor=${encodeURIComponent(floorKey)}` : "";
  if (location.hash !== `#/ar/${project.id}-${arMode}${floorQuery}`) return;
  const version = renderVersion;
  const page = document.createElement("main");
  page.className = "ar-page";

  const backButton = document.createElement("button");
  backButton.className = "btn";
  backButton.type = "button";
  backButton.textContent = "← Voltar ao mapa";
  backButton.addEventListener("click", () => navigate("#/explorar"));

  const modelContainer = document.createElement("section");
  modelContainer.className = "ar-model-container";
  const modelStatus = document.createElement("div");
  modelStatus.className = "model-status";
  modelStatus.setAttribute("role", "status");
  modelStatus.setAttribute("aria-live", "polite");
  modelStatus.textContent = "A carregar o modelo 3D…";
  modelContainer.append(modelStatus);
  const infoBox = document.createElement("div");
  infoBox.id = "infoBox";
  infoBox.setAttribute("role", "status");
  infoBox.setAttribute("aria-live", "polite");
  modelContainer.append(infoBox);
  page.append(backButton, modelContainer);
  app.replaceChildren(page);

  let modelViewer = null;
  let selectedMaterial = null;
  let originalEmissiveFactor = null;
  let disposed = false;
  let selectionVersion = 0;
  let lastSelectionPoint = null;

  function setStatus(message, retry = false) {
    modelStatus.replaceChildren();
    modelStatus.hidden = !message;
    if (!message) return;

    const text = document.createElement("span");
    text.textContent = message;
    modelStatus.append(text);
    if (retry) {
      const retryButton = document.createElement("button");
      retryButton.type = "button";
      retryButton.textContent = "Tentar novamente";
      retryButton.addEventListener("click", loadModelViewer);
      modelStatus.append(retryButton);
    }
  }

  function clearSelection() {
    selectionVersion += 1;
    lastSelectionPoint = null;
    if (selectedMaterial) {
      selectedMaterial.setEmissiveFactor(originalEmissiveFactor);
      selectedMaterial = null;
      originalEmissiveFactor = null;
    }
    infoBox.style.display = "none";
  }

  async function onModelClick(event) {
    const material = modelViewer.materialFromPoint(
      event.clientX,
      event.clientY,
    );
    if (!material) {
      clearSelection();
      return;
    }

    clearSelection();
    selectedMaterial = material;
    originalEmissiveFactor = [...material.emissiveFactor];
    material.setEmissiveFactor([1, 0, 0]);
    infoBox.style.display = "block";
    lastSelectionPoint = { clientX: event.clientX, clientY: event.clientY };
    positionInfoBox(lastSelectionPoint, infoBox, modelContainer);

    const ifcElement = material.name?.match(/^ifc-element-(\d+)$/);
    if (!ifcElement) {
      infoBox.textContent = `Material: ${material.name || "(sem nome)"}`;
      return;
    }

    const version = selectionVersion;
    const expressId = Number(ifcElement[1]);
    infoBox.textContent = `Elemento IFC #${expressId}: a carregar propriedades…`;
    try {
      const element = await getIfcElementInfo(project, expressId);
      if (disposed || version !== selectionVersion) return;
      renderElementInfo(infoBox, element);
      positionInfoBox(lastSelectionPoint, infoBox, modelContainer);
    } catch (error) {
      if (disposed || version !== selectionVersion) return;
      console.error("Não foi possível carregar as propriedades IFC:", error);
      const message = error instanceof Error ? error.message : String(error);
      infoBox.textContent = `Elemento IFC #${expressId}. Não foi possível carregar as propriedades: ${message}`;
      positionInfoBox(lastSelectionPoint, infoBox, modelContainer);
    }
  }

  function repositionInfoBox() {
    if (lastSelectionPoint && infoBox.style.display !== "none") {
      positionInfoBox(lastSelectionPoint, infoBox, modelContainer);
    }
  }

  function onModelLoad() {
    setStatus("");
  }

  function onModelError(event) {
    console.error(
      "Falha ao carregar o modelo 3D:",
      event.detail?.sourceError || event.detail,
    );
    clearSelection();
    setStatus(
      "Não foi possível carregar este modelo. Verifique a ligação à internet e tente novamente.",
      true,
    );
  }

  function removeModelViewer() {
    if (!modelViewer) return;
    modelViewer.removeEventListener("load", onModelLoad);
    modelViewer.removeEventListener("error", onModelError);
    modelViewer.removeEventListener("click", onModelClick);
    modelViewer.remove();
    modelViewer = null;
  }

  async function loadModelViewer() {
    clearSelection();
    removeModelViewer();
    setStatus("A carregar o modelo 3D…");

    try {
      await import("@google/model-viewer");
      if (disposed || version !== renderVersion || !modelContainer.isConnected) {
        return;
      }

      modelViewer = document.createElement("model-viewer");
      modelViewer.setAttribute("ar", "");
      modelViewer.setAttribute("camera-controls", "");
      modelViewer.setAttribute("ar-scale", "fixed");
      modelViewer.setAttribute("touch-action", "pan-y");
      modelViewer.setAttribute("disable-tap", "");
      modelViewer.setAttribute("ar-modes", arMode);
      modelViewer.setAttribute("src", getModelUrl(project.modelUrl));
      const floorDescription = project.selectedFloor
        ? ` a partir de ${project.selectedFloor} e pisos superiores`
        : "";
      modelViewer.setAttribute(
        "alt",
        `Modelo 3D de ${project.name}${floorDescription}`,
      );
      modelViewer.addEventListener("load", onModelLoad);
      modelViewer.addEventListener("error", onModelError);
      modelViewer.addEventListener("click", onModelClick);
      modelContainer.prepend(modelViewer);
    } catch (error) {
      console.error("Não foi possível iniciar o visualizador 3D:", error);
      setStatus(
        "Não foi possível iniciar o visualizador 3D. Verifique a ligação e tente novamente.",
        true,
      );
    }
  }

  activeCleanup = () => {
    disposed = true;
    window.removeEventListener("resize", repositionInfoBox);
    window.visualViewport?.removeEventListener("resize", repositionInfoBox);
    removeModelViewer();
    clearSelection();
  };

  window.addEventListener("resize", repositionInfoBox);
  window.visualViewport?.addEventListener("resize", repositionInfoBox);
  await loadModelViewer();
}

function createPageHeader(navigate) {
  const header = document.createElement("header");
  header.className = "site-header page-header";
  const brand = document.createElement("a");
  brand.className = "brand";
  brand.href = "#/";
  brand.textContent = "BIM-AR";
  brand.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("#/");
  });
  const homeLink = document.createElement("a");
  homeLink.className = "secondary-link";
  homeLink.href = "#/";
  homeLink.textContent = "Página inicial";
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("#/");
  });
  header.append(brand, homeLink);
  return header;
}

function createProjectPopup(project, navigate) {
  const popup = document.createElement("article");
  popup.className = "project-popup";
  const status = document.createElement("span");
  status.className = `status-badge status-${project.status}`;
  status.textContent = statusLabels[project.status];
  popup.append(status);

  appendProjectDetail(popup, "Nome do projeto", project.name);
  appendProjectDetail(popup, "Entidade responsável", project.responsible);
  appendProjectDetail(popup, "Descrição", project.description);

  const modeHelp = document.createElement("div");
  modeHelp.className = "ar-mode-help";
  for (const description of [
    "WebXR: qualquer dispositivo",
    "Scene Viewer: dispositivos Android",
    "Quick Look: dispositivos iOS",
  ]) {
    const line = document.createElement("p");
    line.textContent = description;
    modeHelp.append(line);
  }
  popup.append(modeHelp);

  if (!project.modelUrl) {
    const unavailable = document.createElement("p");
    unavailable.textContent =
      "Este projeto ainda não tem um modelo 3D disponível neste navegador.";
    popup.append(unavailable);
    return popup;
  }

  const modeSelect = document.createElement("select");
  modeSelect.setAttribute("aria-label", "Modo de realidade aumentada");
  arModes.forEach((mode) => {
    const option = document.createElement("option");
    option.value = mode;
    option.textContent = modeLabel(mode);
    modeSelect.append(option);
  });
  let floorSelect = null;
  if (project.floorModels?.length) {
    floorSelect = document.createElement("select");
    floorSelect.setAttribute("aria-label", "Piso a partir do qual visualizar");
    const fullBuilding = document.createElement("option");
    fullBuilding.value = "";
    fullBuilding.textContent = "Edifício completo";
    floorSelect.append(fullBuilding);
    for (const floor of project.floorModels) {
      const option = document.createElement("option");
      option.value = floor.key;
      option.textContent = floor.elevation === null
        ? floor.name
        : `${floor.name} (${floor.elevation.toFixed(2)} m)`;
      floorSelect.append(option);
    }
  }
  if (project.localModel) {
    const arNotice = document.createElement("p");
    arNotice.textContent =
      "No Android, modelos guardados neste navegador não podem ser abertos no Scene Viewer. Use WebXR.";
    popup.append(arNotice);
  }
  const viewButton = document.createElement("button");
  viewButton.type = "button";
  viewButton.className = "primary-button";
  viewButton.textContent = "Ver modelo 3D";
  viewButton.addEventListener("click", () => {
    mapCenter = leafletMap.getCenter();
    mapZoom = leafletMap.getZoom();
    const floorQuery = floorSelect?.value
      ? `?floor=${encodeURIComponent(floorSelect.value)}`
      : "";
    navigate(`#/ar/${project.id}-${modeSelect.value}${floorQuery}`);
  });
  if (floorSelect) popup.append(floorSelect);
  popup.append(modeSelect, viewButton);
  return popup;
}

function appendProjectDetail(container, label, value) {
  if (!value) return;
  const detail = document.createElement("p");
  detail.textContent = `${label}: ${value}`;
  container.append(detail);
}

function createMarkerIcon(L) {
  return L.icon({
    iconRetinaUrl: markerIcon2xUrl,
    iconUrl: markerIconUrl,
    shadowUrl: markerShadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41],
  });
}

function renderElementInfo(container, element) {
  container.replaceChildren();
  const heading = document.createElement("strong");
  heading.textContent = `${element.type || "Elemento IFC"} #${element.expressId}`;
  container.append(heading);

  const attributes = element.attributes;
  if (attributes.length > 0) {
    const section = document.createElement("section");
    const title = document.createElement("strong");
    title.textContent = "Atributos IFC";
    section.append(title);
    const list = document.createElement("ul");
    for (const attribute of attributes) {
      const item = document.createElement("li");
      item.textContent = `${attribute.name}: ${formatPropertyValue(attribute.value)}`;
      list.append(item);
    }
    section.append(list);
    container.append(section);
  }

  for (const set of [...element.propertySets, ...element.quantitySets]) {
    if (!set.properties && !set.quantities) continue;
    const section = document.createElement("section");
    const title = document.createElement("strong");
    title.textContent = set.name;
    section.append(title);
    const list = document.createElement("ul");
    for (const property of set.properties || set.quantities) {
      const item = document.createElement("li");
      const unit = property.unit ? ` ${property.unit}` : "";
      item.textContent = `${property.name}: ${formatPropertyValue(property.value)}${unit}`;
      list.append(item);
    }
    section.append(list);
    container.append(section);
  }
}

function formatPropertyValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function modeLabel(mode) {
  return {
    webxr: "WebXR",
    "scene-viewer": "Scene Viewer",
    "quick-look": "Quick Look",
  }[mode];
}

function locateUser(L, controlButton) {
  if (!leafletMap) return;

  controlButton.disabled = true;
  controlButton.title = "A obter localização…";
  leafletMap.locate({ setView: true, maxZoom: 14, enableHighAccuracy: true });

  leafletMap.once("locationfound", (event) => {
    if (!leafletMap) return;
    L.marker(event.latlng, { icon: createMarkerIcon(L) })
      .addTo(leafletMap)
      .bindPopup("Está aqui")
      .openPopup();
    L.circle(event.latlng, event.accuracy).addTo(leafletMap);
    controlButton.disabled = false;
    controlButton.title = "Centrar o mapa na minha localização";
  });

  leafletMap.once("locationerror", (event) => {
    console.warn("Não foi possível obter a localização:", event.message);
    if (!leafletMap) return;
    controlButton.disabled = false;
    controlButton.title = "Localização indisponível";
  });
}

function positionInfoBox(point, infoBox, container) {
  const padding = 10;
  const bounds = container.getBoundingClientRect();
  const boxWidth = infoBox.offsetWidth;
  const boxHeight = infoBox.offsetHeight;
  const maxX = Math.max(padding, bounds.width - boxWidth - padding);
  const maxY = Math.max(padding, bounds.height - boxHeight - padding);
  const x = point.clientX - bounds.left + 15;
  const y = point.clientY - bounds.top + 15;

  infoBox.style.left = `${Math.min(maxX, Math.max(padding, x))}px`;
  infoBox.style.top = `${Math.min(maxY, Math.max(padding, y))}px`;
}
