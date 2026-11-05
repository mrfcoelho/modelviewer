import "leaflet/dist/leaflet.css";
import { saveLocalProject } from "../services/project-data.js";

const defaultCoordinates = [41.45330011034379, -8.28837129166596];

export async function renderSubmission(app, navigate, onSubmitted) {
  const L = await import("leaflet");
  if (location.hash !== "#/submeter") return;
  const page = document.createElement("main");
  page.className = "submission-page";
  page.append(createHeader(navigate));

  const content = document.createElement("section");
  content.className = "submission-content";
  const heading = document.createElement("h1");
  heading.textContent = "Submeter um projeto";
  const introduction = document.createElement("p");
  introduction.className = "intro";
  introduction.textContent =
    "O IFC e os dados da submissão ficam associados ao processo de licenciamento";
  content.append(heading, introduction);

  const form = document.createElement("form");
  form.className = "project-form";
  const fileField = document.createElement("div");
  fileField.className = "form-field";
  const fileLabel = document.createElement("label");
  fileLabel.htmlFor = "ifc-file";
  fileLabel.textContent = "Ficheiro IFC";
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.id = "ifc-file";
  fileInput.className = "visually-hidden-file-input";
  fileInput.accept = ".ifc,application/octet-stream";
  fileInput.required = true;
  fileInput.setAttribute("aria-describedby", "selected-file");
  const chooseFile = document.createElement("label");
  chooseFile.className = "primary-button file-picker-button";
  chooseFile.htmlFor = fileInput.id;
  chooseFile.textContent = "Escolher ficheiro";
  const selectedFile = document.createElement("p");
  selectedFile.id = "selected-file";
  selectedFile.className = "selected-file";
  selectedFile.setAttribute("aria-live", "polite");
  fileInput.addEventListener("change", () => {
    selectedFile.textContent = fileInput.files?.[0]
      ? `Ficheiro selecionado: ${fileInput.files[0].name}`
      : "";
  });
  fileField.append(fileLabel, fileInput, chooseFile, selectedFile);
  form.append(fileField);

  const nameInput = createInput("text", "project-name");
  nameInput.required = true;
  nameInput.maxLength = 120;
  form.append(createField("Nome do projeto", nameInput));

  const responsibleInput = createInput("text", "project-responsible");
  responsibleInput.maxLength = 120;
  form.append(createField("Entidade responsável", responsibleInput));

  const descriptionInput = document.createElement("textarea");
  descriptionInput.name = "description";
  descriptionInput.rows = 3;
  descriptionInput.maxLength = 1000;
  form.append(createField("Descrição", descriptionInput));

  const coordinates = document.createElement("div");
  coordinates.className = "coordinate-fields";
  const latitudeInput = createInput("number", "latitude");
  latitudeInput.step = "any";
  latitudeInput.min = "-90";
  latitudeInput.max = "90";
  latitudeInput.required = true;
  latitudeInput.value = String(defaultCoordinates[0]);
  const longitudeInput = createInput("number", "longitude");
  longitudeInput.step = "any";
  longitudeInput.min = "-180";
  longitudeInput.max = "180";
  longitudeInput.required = true;
  longitudeInput.value = String(defaultCoordinates[1]);
  coordinates.append(
    createField("Latitude", latitudeInput),
    createField("Longitude", longitudeInput),
  );
  form.append(createField("Localização", coordinates));

  const locationHelp = document.createElement("small");
  locationHelp.textContent = "Clique no mapa para escolher a localização.";
  const pickerMap = document.createElement("div");
  pickerMap.id = "location-picker";
  pickerMap.setAttribute("aria-label", "Escolha a localização do projeto");
  form.append(locationHelp, pickerMap);

  const draftStatus = document.createElement("span");
  draftStatus.className = "status-badge status-draft";
  draftStatus.textContent = "Estado: Rascunho";

  const feedback = document.createElement("p");
  feedback.className = "form-feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  const submitButton = document.createElement("button");
  submitButton.className = "primary-button";
  submitButton.type = "submit";
  submitButton.textContent = "Submeter projeto";
  form.append(draftStatus, feedback, submitButton);
  content.append(form);
  page.append(content);
  app.replaceChildren(page);

  const picker = L.map(pickerMap);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(picker);
  picker.setView(defaultCoordinates, 15);
  let marker = L.marker(defaultCoordinates).addTo(picker);
  picker.on("click", (event) => {
    latitudeInput.value = String(event.latlng.lat);
    longitudeInput.value = String(event.latlng.lng);
    marker.setLatLng(event.latlng);
  });

  const syncMarker = () => {
    const latitude = Number(latitudeInput.value);
    const longitude = Number(longitudeInput.value);
    if (
      Number.isFinite(latitude) &&
      Number.isFinite(longitude) &&
      Math.abs(latitude) <= 90 &&
      Math.abs(longitude) <= 180
    ) {
      marker.setLatLng([latitude, longitude]);
    }
  };
  latitudeInput.addEventListener("change", syncMarker);
  longitudeInput.addEventListener("change", syncMarker);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    feedback.classList.remove("form-feedback-error");

    const file = fileInput.files?.[0];
    if (!file || !file.name.toLowerCase().endsWith(".ifc")) {
      feedback.textContent = "Selecione um ficheiro com extensão .ifc.";
      feedback.classList.add("form-feedback-error");
      return;
    }

    const project = {
      id: `local-${crypto.randomUUID()}`,
      name: nameInput.value.trim(),
      description: descriptionInput.value.trim(),
      responsible: responsibleInput.value.trim(),
      status: "submitted",
      coords: [Number(latitudeInput.value), Number(longitudeInput.value)],
      modelUrl: null,
      fileName: file.name,
    };

    submitButton.disabled = true;

    try {
      feedback.textContent = "A carregar o processador IFC…";
      const { processIfcFile } = await import("../services/ifc-processing.js");
      const { modelBlob } = await processIfcFile(file, (message) => {
        feedback.textContent = message;
      });
      if (!form.isConnected) return;

      feedback.textContent = "A guardar o projeto neste navegador…";
      const savedProject = await saveLocalProject(project, modelBlob, file);
      onSubmitted(savedProject);
      if (!form.isConnected) return;
      renderConfirmation(app, savedProject, navigate);
    } catch (error) {
      console.error("Não foi possível processar ou guardar o projeto:", error);
      const message = error instanceof Error ? error.message : String(error);
      feedback.textContent = `Não foi possível processar ou guardar o projeto: ${message}`;
      feedback.classList.add("form-feedback-error");
      submitButton.disabled = false;
    }
  });
}

function createHeader(navigate) {
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

function createField(labelText, control) {
  const label = document.createElement("label");
  label.className = "form-field";
  const labelTextElement = document.createElement("span");
  labelTextElement.textContent = labelText;
  label.append(labelTextElement, control);
  return label;
}

function createInput(type, name) {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  return input;
}

function renderConfirmation(app, project, navigate) {
  const confirmation = document.createElement("main");
  confirmation.className = "confirmation-page";
  const card = document.createElement("section");
  card.className = "confirmation-card";
  const heading = document.createElement("h1");
  heading.textContent = "Projeto submetido";
  const summary = document.createElement("div");
  summary.className = "confirmation-summary";
  const fields = [
    ["Ficheiro IFC", project.fileName],
    ["Nome do projeto", project.name],
    ["Entidade responsável", project.responsible],
    ["Descrição", project.description],
    [
      "Localização (Lat;Lon)",
      `(${project.coords[0].toFixed(2)};${project.coords[1].toFixed(2)})`,
    ],
  ];
  for (const [label, value] of fields) {
    if (!value) continue;
    const field = document.createElement("p");
    field.textContent = `${label}: ${value}`;
    summary.append(field);
  }
  const exploreButton = document.createElement("button");
  exploreButton.className = "primary-button";
  exploreButton.type = "button";
  exploreButton.textContent = "Ver no mapa";
  exploreButton.addEventListener("click", () => navigate("#/explorar"));
  const homeLink = document.createElement("a");
  homeLink.href = "#/";
  homeLink.textContent = "Voltar à página inicial";
  homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("#/");
  });
  card.append(heading, summary, exploreButton, homeLink);
  confirmation.append(card);
  app.replaceChildren(confirmation);
}
