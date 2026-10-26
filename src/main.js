import * as L from "leaflet";
import "@google/model-viewer";
import * as THREE from "three";
import "./main.css";

const app = document.getElementById("app");
const arModes = ["webxr", "scene-viewer", "quick-look"];

let leafletMap = null;
let locations = [];
let mapCenter = null;
let mapZoom = null;
let cleanupARView = null;

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

  const infoBox = document.createElement("div");
  infoBox.id = "infoBox";

  arView.append(backButton, modelViewer);
  app.replaceChildren(arView, infoBox);

  const raycaster = new THREE.Raycaster();
  const touch = new THREE.Vector2();
  let threeScene = null;
  let selectedMesh = null;
  let originalMaterial = null;
  let highlightMaterial = null;

  function clearSelection() {
    if (selectedMesh) {
      selectedMesh.material = originalMaterial;
      if (Array.isArray(highlightMaterial)) {
        highlightMaterial.forEach((material) => material.dispose());
      } else if (highlightMaterial) {
        highlightMaterial.dispose();
      }
      selectedMesh = null;
      originalMaterial = null;
      highlightMaterial = null;
    }
    infoBox.style.display = "none";
  }

  function pickObjects(event) {
    if (!threeScene || !threeScene.camera) return;

    const rect = modelViewer.getBoundingClientRect();
    touch.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    touch.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(touch, threeScene.camera);

    const intersects = raycaster.intersectObjects(threeScene.children, true);
    const object = intersects[0] && intersects[0].object;
    if (!object || !object.isMesh || !object.material) {
      clearSelection();
      return;
    }

    clearSelection();
    selectedMesh = object;
    originalMaterial = object.material;
    const createHighlight = (material) => {
      const highlighted = material.clone();
      if (highlighted.color) highlighted.color.set(0xff4444);
      return highlighted;
    };
    highlightMaterial = Array.isArray(originalMaterial)
      ? originalMaterial.map(createHighlight)
      : createHighlight(originalMaterial);
    object.material = highlightMaterial;

    infoBox.textContent = `Name: ${object.name || "(unnamed)"}`;
    infoBox.style.display = "block";
    positionInfoBox(event, infoBox);
  }

  function onModelLoad() {
    const sceneSymbol = Object.getOwnPropertySymbols(modelViewer).find(
      (symbol) => symbol.description === "scene",
    );
    if (!sceneSymbol) {
      console.warn("Unable to access the model-viewer scene for object selection");
      return;
    }
    threeScene = modelViewer[sceneSymbol];
    modelViewer.addEventListener("click", pickObjects);
  }

  modelViewer.addEventListener("load", onModelLoad, { once: true });
  cleanupARView = () => {
    modelViewer.removeEventListener("load", onModelLoad);
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
  try {
    locations = await fetchModelData();
    router(); // render initial view
    window.addEventListener("hashchange", router);
  } catch (err) {
    console.error(err);
    renderNotFound();
  }
}

init();
