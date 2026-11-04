import * as L from "leaflet";
import "@google/model-viewer";
import "./main.css";

const app = document.getElementById("app");
const arModes = ["webxr", "scene-viewer", "quick-look"];

let leafletMap = null;
let locations = [];
let mapCenter = null;
let mapZoom = null;
let cleanupARView = null;
let hasRouterListener = false;

async function fetchModelData() {
  const res = await fetch("models.json");
  if (!res.ok) throw new Error("Failed to load model data");
  return validateModelData(await res.json());
}

function validateModelData(data) {
  if (!Array.isArray(data)) {
    throw new Error("Model data must be an array");
  }

  const ids = new Set();
  return data.map((loc, index) => {
    if (
      !loc ||
      typeof loc.id !== "string" ||
      !/^\d+$/.test(loc.id) ||
      ids.has(loc.id) ||
      typeof loc.name !== "string" ||
      !loc.name.trim() ||
      !Array.isArray(loc.coords) ||
      loc.coords.length !== 2 ||
      !Number.isFinite(loc.coords[0]) ||
      !Number.isFinite(loc.coords[1]) ||
      Math.abs(loc.coords[0]) > 90 ||
      Math.abs(loc.coords[1]) > 180 ||
      typeof loc.modelUrl !== "string" ||
      !/^models\/[A-Za-z0-9._/-]+\.(glb|gltf)$/i.test(loc.modelUrl) ||
      loc.modelUrl.split("/").includes("..")
    ) {
      throw new Error(`Invalid model data at entry ${index}`);
    }

    ids.add(loc.id);
    return {
      id: loc.id,
      name: loc.name.trim(),
      coords: loc.coords,
      modelUrl: loc.modelUrl,
    };
  });
}

function locateUser(controlBtn) {
  leafletMap.locate({
    setView: true,
    maxZoom: 14,
    enableHighAccuracy: true,
  });

  leafletMap.once("locationfound", (e) => {
    const radius = e.accuracy;

    L.marker(e.latlng).addTo(leafletMap).bindPopup("You are here").openPopup();

    L.circle(e.latlng, radius).addTo(leafletMap);

    if (controlBtn) {
      controlBtn.disabled = false;
      controlBtn.title = "Center on Me";
    }
  });

  leafletMap.once("locationerror", (e) => {
    console.warn("Location failed:", e.message);
    leafletMap.setView([51.505, -0.09], 13);

    if (controlBtn) {
      controlBtn.disabled = true;
      controlBtn.title = "Location unavailable";
    }
  });
}

function addLocationMarkers() {
  locations.forEach((loc) => {
    const marker = L.marker(loc.coords).addTo(leafletMap);

    const popupContent = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = loc.name;
    popupContent.append(name, document.createElement("br"));

    const modeSelect = document.createElement("select");
    modeSelect.setAttribute("aria-label", "AR mode");
    arModes.forEach((mode) => {
      const option = document.createElement("option");
      option.value = mode;
      option.textContent = mode;
      modeSelect.append(option);
    });

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Enter AR";
    button.addEventListener("click", () => goToAR(loc.id, modeSelect.value));

    popupContent.append(button, modeSelect);
    marker.bindPopup(popupContent);
  });
}

function goToAR(id, arMode) {
  if (leafletMap) {
    mapCenter = leafletMap.getCenter();
    mapZoom = leafletMap.getZoom();
  }
  location.hash = `#/ar/${id}-${arMode}`;
}

function renderARView(id, arMode) {
  const loc = locations.find((l) => l.id === id);
  if (!loc) return renderNotFound();

  if (cleanupARView) cleanupARView();

  const arView = document.createElement("div");
  arView.id = "ar-view";

  const backButton = document.createElement("button");
  backButton.className = "btn";
  backButton.type = "button";
  backButton.textContent = "← Back to Map";
  backButton.addEventListener("click", () => {
    location.hash = "#";
  });

  const modelViewer = document.createElement("model-viewer");
  modelViewer.id = "mv";
  modelViewer.setAttribute("ar", "");
  modelViewer.setAttribute("camera-controls", "");
  modelViewer.setAttribute("ar-scale", "fixed");
  modelViewer.setAttribute("touch-action", "pan-y");
  modelViewer.setAttribute("disable-tap", "");
  modelViewer.setAttribute("ar-modes", arMode);
  modelViewer.setAttribute("src", loc.modelUrl);
  modelViewer.setAttribute("alt", `3D model of ${loc.name}`);

  const modelStatus = document.createElement("div");
  modelStatus.className = "model-status";
  modelStatus.setAttribute("role", "status");
  modelStatus.setAttribute("aria-live", "polite");
  modelStatus.textContent = "Loading 3D model…";

  const infoBox = document.createElement("div");
  infoBox.id = "infoBox";

  arView.append(backButton, modelViewer, modelStatus);
  app.replaceChildren(arView, infoBox);

  let selectedMaterial = null;
  let originalEmissiveFactor = null;

  function setModelStatus(message, showRetry = false) {
    modelStatus.replaceChildren();
    modelStatus.hidden = !message;
    if (!message) return;

    const text = document.createElement("span");
    text.textContent = message;
    modelStatus.append(text);

    if (showRetry) {
      const retryButton = document.createElement("button");
      retryButton.type = "button";
      retryButton.textContent = "Try again";
      retryButton.addEventListener("click", () => renderARView(id, arMode));
      modelStatus.append(retryButton);
    }
  }

  function clearSelection() {
    if (selectedMaterial) {
      selectedMaterial.setEmissiveFactor(originalEmissiveFactor);
      selectedMaterial = null;
      originalEmissiveFactor = null;
    }
    infoBox.style.display = "none";
  }

  function pickObjects(event) {
    const material = modelViewer.materialFromPoint(event.clientX, event.clientY);
    if (!material) {
      clearSelection();
      return;
    }

    clearSelection();
    selectedMaterial = material;
    originalEmissiveFactor = [...material.emissiveFactor];
    material.setEmissiveFactor([1, 0, 0]);

    infoBox.textContent = `Material: ${material.name || "(unnamed)"}`;
    infoBox.style.display = "block";
    positionInfoBox(event, infoBox);
  }

  function onModelLoad() {
    setModelStatus("");
  }

  function onModelError(event) {
    console.error("Failed to load 3D model:", event.detail?.sourceError || event.detail);
    clearSelection();
    setModelStatus(
      "Could not load this 3D model. Check your connection and try again.",
      true,
    );
  }

  modelViewer.addEventListener("load", onModelLoad);
  modelViewer.addEventListener("error", onModelError);
  modelViewer.addEventListener("click", pickObjects);
  cleanupARView = () => {
    modelViewer.removeEventListener("load", onModelLoad);
    modelViewer.removeEventListener("error", onModelError);
    modelViewer.removeEventListener("click", pickObjects);
    clearSelection();
    cleanupARView = null;
  };
}

function positionInfoBox(event, infoBox) {
  const padding = 10;
  const boxWidth = infoBox.offsetWidth;
  const boxHeight = infoBox.offsetHeight;
  const screenW = window.innerWidth;
  const screenH = window.innerHeight;

  let x = event.clientX + 15; // ligeiro offset
  let y = event.clientY + 15;

  // Ajustar se sair fora da direita
  if (x + boxWidth + padding > screenW) {
    x = screenW - boxWidth - padding;
  }

  // Ajustar se sair fora de baixo
  if (y + boxHeight + padding > screenH) {
    y = screenH - boxHeight - padding;
  }

  // Evitar sair fora da esquerda ou topo
  x = Math.max(padding, x);
  y = Math.max(padding, y);

  infoBox.style.left = `${x}px`;
  infoBox.style.top = `${y}px`;
}

function renderMapView() {
  if (cleanupARView) cleanupARView();

  const mapElement = document.createElement("div");
  mapElement.id = "map";
  app.replaceChildren(mapElement);

  if (leafletMap) {
    leafletMap.remove();
    leafletMap = null;
  }

  leafletMap = L.map("map");

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(leafletMap);

  const center = mapCenter || [41.45330011034379, -8.28837129166596];
  const zoom = mapZoom || 13;
  leafletMap.setView(center, zoom);

  addLocationMarkers();

  // Add custom control again
  const centerControl = L.control({ position: "bottomright" });
  centerControl.onAdd = function (map) {
    const btn = L.DomUtil.create("button", "leaflet-bar center-control");
    btn.textContent = "📍";
    btn.title = "Center on Me";
    L.DomEvent.disableClickPropagation(btn);
    btn.addEventListener("click", () => locateUser(btn));
    return btn;
  };
  centerControl.addTo(leafletMap);
}

function renderNotFound() {
  if (cleanupARView) cleanupARView();

  const container = document.createElement("div");
  container.style.padding = "2rem";
  container.style.textAlign = "center";
  const heading = document.createElement("h2");
  heading.textContent = "404 - Page Not Found";
  const backLink = document.createElement("a");
  backLink.href = "#";
  backLink.textContent = "Back to Home";
  container.append(heading, backLink);
  app.replaceChildren(container);
}

function renderStartupStatus(message, retry) {
  const container = document.createElement("main");
  container.className = "startup-status";
  container.setAttribute("role", "status");

  const text = document.createElement("p");
  text.textContent = message;
  container.append(text);

  if (retry) {
    const retryButton = document.createElement("button");
    retryButton.type = "button";
    retryButton.textContent = "Try again";
    retryButton.addEventListener("click", retry);
    container.append(retryButton);
  }

  app.replaceChildren(container);
}

function router() {
  const hash = location.hash || "#";
  const match = hash.match(/^#\/ar\/(\d+)-([a-z-]+)$/);

  if (hash === "#") {
    renderMapView();
  } else if (match && arModes.includes(match[2])) {
    renderARView(match[1], match[2]);
  } else {
    renderNotFound();
  }
}

async function init() {
  renderStartupStatus("Loading model locations…");

  try {
    locations = await fetchModelData();
    router(); // render initial view
    if (!hasRouterListener) {
      window.addEventListener("hashchange", router);
      hasRouterListener = true;
    }
  } catch (err) {
    console.error("Failed to load model locations:", err);
    renderStartupStatus(
      "Could not load model locations. Check your connection and try again.",
      init,
    );
  }
}

init();
