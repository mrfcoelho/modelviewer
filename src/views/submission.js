import "leaflet/dist/leaflet.css";
import { saveLocalProject } from "../services/project-data.js";

const defaultCoordinates = [41.45330011034379, -8.28837129166596];

export async function renderSubmission(app, projects, navigate, onSubmitted) {
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
    "Esta demonstração guarda os dados apenas nesta sessão do navegador. O ficheiro IFC não é enviado nem convertido.";
  content.append(heading, introduction);

  const form = document.createElement("form");
  form.className = "project-form";
  const fileInput = document.createElement("input");
  fileInput.type = "file";
  fileInput.accept = ".ifc,application/octet-stream";
  fileInput.required = true;
  fileInput.setAttribute("aria-describedby", "file-help selected-file");

  const fileHelp = document.createElement("small");
  fileHelp.id = "file-help";
  fileHelp.textContent =
    "O ficheiro é usado apenas para simular a submissão e não sai do seu computador.";
  const selectedFile = document.createElement("p");
  selectedFile.id = "selected-file";
  selectedFile.className = "selected-file";
  selectedFile.setAttribute("aria-live", "polite");
  fileInput.addEventListener("change", () => {
    selectedFile.textContent = fileInput.files?.[0]
      ? `Ficheiro selecionado: ${fileInput.files[0].name}`
      : "";
  });
  form.append(
    createField("Ficheiro IFC", fileInput),
    fileHelp,
    selectedFile,
  );

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

  const demoSelect = document.createElement("select");
  demoSelect.name = "demo-model";
  const noDemoOption = document.createElement("option");
  noDemoOption.value = "";
  noDemoOption.textContent = "Sem modelo de demonstração";
  demoSelect.append(noDemoOption);
  projects
    .filter((project) => project.modelUrl)
    .forEach((project) => {
      const option = document.createElement("option");
      option.value = project.id;
      option.textContent = project.name;
      demoSelect.append(option);
    });
  form.append(
    createField(
      "Modelo GLB para demonstração (opcional)",
      demoSelect,
    ),
  );

  const feedback = document.createElement("p");
  feedback.className = "form-feedback";
  feedback.setAttribute("role", "status");
  feedback.setAttribute("aria-live", "polite");
  const submitButton = document.createElement("button");
  submitButton.className = "primary-button";
  submitButton.type = "submit";
  submitButton.textContent = "Simular submissão";
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

    const demoProject = projects.find(
      (project) => project.id === demoSelect.value,
    );
    const project = {
      id: `local-${crypto.randomUUID()}`,
      name: nameInput.value.trim(),
      description: descriptionInput.value.trim(),
      responsible: responsibleInput.value.trim(),
      status: "submitted",
      coords: [Number(latitudeInput.value), Number(longitudeInput.value)],
      modelUrl: demoProject?.modelUrl || null,
      fileName: file.name,
    };

    submitButton.disabled = true;
    feedback.textContent = "A preparar a demonstração de submissão…";
    await new Promise((resolve) => setTimeout(resolve, 900));

    try {
      const savedProject = saveLocalProject(project);
      onSubmitted(savedProject);
      renderConfirmation(app, savedProject, navigate);
    } catch (error) {
      console.error("Não foi possível guardar a submissão local:", error);
      feedback.textContent =
        "Não foi possível guardar o projeto nesta sessão. Verifique o armazenamento do navegador e tente novamente.";
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
  const name = document.createElement("p");
  name.textContent = project.name;
  const detail = document.createElement("p");
  detail.textContent =
    "O projeto ficou disponível no mapa desta sessão. A submissão não foi enviada para um servidor.";
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
  card.append(heading, name, detail, exploreButton, homeLink);
  confirmation.append(card);
  app.replaceChildren(confirmation);
}
