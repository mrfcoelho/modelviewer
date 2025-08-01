import "leaflet";
import "./main.css";

const app = document.getElementById("app");

let leafletMap = null;
let locations = [];
let mapCenter = null;
let mapZoom = null;

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
    `;

    marker.bindPopup(popupContent);

    // Add event listener when the popup is opened
    marker.on("popupopen", (e) => {
      const popupEl = e.popup.getElement();
      const btn = popupEl.querySelector(".enter-ar-btn");
      if (btn) {
        btn.addEventListener("click", () => goToAR(loc.id));
      }
    });
  });
}

function goToAR(id) {
  if (leafletMap) {
    mapCenter = leafletMap.getCenter();
    mapZoom = leafletMap.getZoom();
  }
  location.hash = `#/ar/${id}`;
}

function renderARView(id) {
  const loc = locations.find((l) => l.id === id);
  if (!loc) return renderNotFound();

  app.innerHTML = `
    <div id="ar-view">
      <button class="btn" onclick="location.hash = '#'">← Back to Map</button>
      <model-viewer
        ar
        camera-controls
        ar-scale="fixed"
        touch-action="pan-y"
        ar-modes="scene-viewer quick-look webxr"
        src="${loc.modelUrl}"
        alt="3D model of ${loc.name}"
      ></model-viewer>
    </div>
  `;
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
  const match = hash.match(/^#\/ar\/(\d+)$/);

  if (hash === "#") {
    renderMapView();
  } else if (match) {
    renderARView(match[1]);
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
