import "leaflet";
import "@google/model-viewer";
import * as THREE from "three";
import "./main.css";

const app = document.getElementById("app");

let leafletMap = null;
let locations = [];
let mapCenter = null;
let mapZoom = null;

let selectedMesh = null;
let originalMaterial = null;

async function fetchModelData() {
  const res = await fetch("models.json");
  if (!res.ok) throw new Error("Failed to load model data");
  return res.json();
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

    const popupContent = `
      <strong>${loc.name}</strong><br>
      <button class="enter-ar-btn" data-id="${loc.id}">Enter AR</button>
      <select name="ARModes" id="ARModes">
        <option value="webxr">webxr</option>
        <option value="scene-viewer">scene-viewer</option>
        <option value="quick-look">quick-look</option>
      </select>
    `;

    marker.bindPopup(popupContent);

    // Add event listener when the popup is opened
    marker.on("popupopen", (e) => {
      const popupEl = e.popup.getElement();
      const btn = popupEl.querySelector(".enter-ar-btn");
      const ARMode = document.getElementById("ARModes");
      if (btn) {
        btn.addEventListener("click", () => goToAR(loc.id, ARMode.value));
      }
    });
  });
}

function goToAR(id, armode) {
  if (leafletMap) {
    mapCenter = leafletMap.getCenter();
    mapZoom = leafletMap.getZoom();
  }
  location.hash = `#/ar/${id}-${armode}`;
}

function renderARView(id, armode) {
  const loc = locations.find((l) => l.id === id);
  if (!loc) return renderNotFound();

  app.innerHTML = `
    <div id="ar-view">
      <button class="btn" onclick="location.hash = '#'">← Back to Map</button>
      <model-viewer
        id="mv"
        ar
        camera-controls
        ar-scale="fixed"
        touch-action="pan-y"
        disable-tap
        ar-modes="${armode}"
        src="${loc.modelUrl}"
        alt="3D model of ${loc.name}"
      >
      </model-viewer>
    </div>
    <div id="infoBox"></div>
  `;

  const modelViewer = document.querySelector("model-viewer#mv");

  const symbols = Object.getOwnPropertySymbols(modelViewer);
  const mvSceneSymbol = symbols.find((s) => s.description === "scene");

  if (!mvSceneSymbol) {
    console.warn("Not able to find symbol “scene” in <model-viewer>");
    return;
  }
  const threeScene = modelViewer[mvSceneSymbol];
  console.log("cena do three", threeScene);
  console.log("filhos ", threeScene.children);

  const raycaster = new THREE.Raycaster();
  const touch = new THREE.Vector2();

  modelViewer.addEventListener("load", () => {
    // const originalGltfJson = modelViewer.originalGltfJson;
    // console.log(originalGltfJson);

    const pickObjects = (event) => {
      // console.log(event);
      const rect = modelViewer.getBoundingClientRect();

      //Normalized Device Coordinates (-1..1)
      touch.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      touch.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      //get camera from three scene
      const camera = threeScene.camera;

      // update raycaster with current position of click and camera
      raycaster.setFromCamera(touch, camera);

      // check scene to find the objects intersected
      const intersects = raycaster.intersectObjects(threeScene.children, true);
      // console.log(intersects);

      if (intersects.length > 0) {
        const object = intersects[0].object;
        console.log("objecto clicado: ", object);
        console.log("Nome: ", object.name || "(sem nome)");
        console.log("BIM Info :", object.userData);

        // Se já havia uma mesh selecionada, restaurar
        if (selectedMesh) {
          selectedMesh.material = originalMaterial;
          selectedMesh = null;
          originalMaterial = null;
        }

        // Guardar material original e destacar a nova
        originalMaterial = object.material.clone();
        selectedMesh = object;
        object.material = object.material.clone();
        object.material.color.set(0xff4444); // cor de destaque

        // Mostrar info box
        infoBox.textContent = `Nome: ${object.name || "(sem nome)"}`;
        infoBox.style.display = "block";

        positionInfoBox(event);
      } else {
        console.log("nada intersetado");
        // Clicou fora de qualquer mesh → limpar seleção
        if (selectedMesh) {
          selectedMesh.material = originalMaterial;
          selectedMesh = null;
          originalMaterial = null;
        }
        infoBox.style.display = "none";
      }
    };

    document.addEventListener("click", pickObjects);
  });
}

function positionInfoBox(event) {
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
  app.innerHTML = `<div id="map" style="height: 100%"></div>`;

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
  app.innerHTML = `
    <div style="padding: 2rem; text-align: center;">
      <h2>404 - Page Not Found</h2>
      <a href="#">Back to Home</a>
    </div>
  `;
}

function router() {
  const hash = location.hash || "#";
  const match = hash.match(/^#\/ar\/(\d+)-([a-z||-]+)$/);

  if (hash === "#") {
    renderMapView();
  } else if (match) {
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
