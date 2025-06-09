import "leaflet";
import "./main.css";

const app = document.getElementById("app");

let leafletMap = null;
let locations = [];

async function fetchModelData() {
  const res = await fetch("models.json");
  if (!res.ok) throw new Error("Failed to load model data");
  return res.json();
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

  // Add AR model markers once
  addLocationMarkers();

  // Add custom "Center on Me" control
  const centerControl = L.control({ position: "bottomright" });

  centerControl.onAdd = function (map) {
    const btn = L.DomUtil.create("button", "leaflet-bar center-control");
    btn.textContent = "📍";
    btn.title = "Center on Me";
    btn.disabled = false;

    // Prevent map click-through
    L.DomEvent.disableClickPropagation(btn);

    btn.addEventListener("click", () => {
      locateUser(btn);
    });

    return btn;
  };

  centerControl.addTo(leafletMap);

  // Attempt location on load
  locateUser(); // optional auto-locate
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
    marker.bindPopup(`
      <strong>${loc.name}</strong><br>
      <button onclick="location.hash = '#/ar/${loc.id}'">Enter AR</button>
    `);
  });
}
function renderARView(id) {
  const loc = locations.find((l) => l.id === id);
  if (!loc) return renderNotFound();

  app.innerHTML = `
    <div id="ar-view">
      <button class="btn" onclick="location.hash = '#'">← Back to Map</button>
      <model-viewer
        src="${loc.modelUrl}"
        alt="3D model of ${loc.name}"
        ar
        ar-modes="scene-viewer webxr quick-look"
        autoplay
        camera-controls
        ar-scale="fixed"
      ></model-viewer>
    </div>
  `;
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
