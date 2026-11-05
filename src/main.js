import "./main.css";
import { loadProjects } from "./services/project-data.js";
import { renderHome } from "./views/home.js";

const app = document.getElementById("app");
const arModes = ["webxr", "scene-viewer", "quick-look"];

let projects = [];
let exploreView = null;
let isLoadingProjects = false;
let projectsLoaded = false;
let navigationVersion = 0;

function navigate(hash) {
  if (location.hash === hash) {
    router();
  } else {
    location.hash = hash;
  }
}

function renderStatus(message, retry, retryLabel = "Tentar novamente") {
  cleanupExploreView();
  const container = document.createElement("main");
  container.className = "startup-status";
  container.setAttribute("role", "status");
  const text = document.createElement("p");
  text.textContent = message;
  container.append(text);

  if (retry) {
    const retryButton = document.createElement("button");
    retryButton.type = "button";
    retryButton.textContent = retryLabel;
    retryButton.addEventListener("click", retry);
    container.append(retryButton);
  }
  app.replaceChildren(container);
}

function cleanupExploreView() {
  exploreView?.cleanupExplore();
}

async function router() {
  const version = ++navigationVersion;
  const route = location.hash || "#/";
  if (route === "#" || route === "#/") {
    cleanupExploreView();
    renderHome(app, navigate);
    return;
  }

  if (!projectsLoaded) {
    renderStatus("A carregar projetos…", init);
    return;
  }

  if (route === "#/explorar") {
    cleanupExploreView();
    try {
      exploreView = await import("./views/explore.js");
      if (version !== navigationVersion) return;
      await exploreView.renderExplore(app, projects, navigate);
    } catch (error) {
      if (version !== navigationVersion) return;
      console.error("Não foi possível abrir o mapa de projetos:", error);
      renderStatus(
        "Não foi possível abrir o mapa. Verifique a ligação à internet e tente novamente.",
        router,
      );
    }
    return;
  }

  if (route === "#/submeter") {
    cleanupExploreView();
    try {
      const { renderSubmission } = await import("./views/submission.js");
      if (version !== navigationVersion) return;
      await renderSubmission(app, navigate, (project) => {
        projects = [...projects, project];
      });
    } catch (error) {
      if (version !== navigationVersion) return;
      console.error("Não foi possível abrir a área de submissão:", error);
      renderStatus(
        "Não foi possível abrir a área de submissão. Tente novamente.",
        router,
      );
    }
    return;
  }

  const arRoute = route.match(
    /^#\/ar\/([A-Za-z0-9-]+)(?:\?floor=([A-Za-z0-9-]+))?$/,
  );
  const arMode = arRoute
    ? arModes.find((mode) => arRoute[1].endsWith(`-${mode}`))
    : null;
  if (arRoute && arMode) {
    const projectId = arRoute[1].slice(0, -(arMode.length + 1));
    const project = projects.find(({ id }) => id === projectId);
    const floorModel = arRoute[2]
      ? project?.floorModels?.find(({ key }) => key === arRoute[2])
      : null;
    if (
      !project ||
      (!floorModel && arRoute[2]) ||
      !(floorModel?.modelUrl || project.modelUrl)
    ) {
      renderNotFound();
      return;
    }
    if (project.localModel && arMode === "scene-viewer") {
      renderStatus(
        "O Scene Viewer não consegue abrir modelos guardados localmente. Escolha WebXR ou Quick Look.",
        () => navigate("#/explorar"),
        "Voltar ao mapa",
      );
      return;
    }

    cleanupExploreView();
    try {
      exploreView = await import("./views/explore.js");
      if (version !== navigationVersion) return;
      const selectedProject = floorModel
        ? {
            ...project,
            modelUrl: floorModel.modelUrl,
            selectedFloor: floorModel.name,
          }
        : project;
      await exploreView.renderAR(
        app,
        selectedProject,
        arMode,
        navigate,
        floorModel?.key,
      );
    } catch (error) {
      if (version !== navigationVersion) return;
      console.error("Não foi possível abrir o modelo 3D:", error);
      renderStatus(
        "Não foi possível abrir o visualizador 3D. Tente novamente.",
        router,
      );
    }
    return;
  }

  renderNotFound();
}

function renderNotFound() {
  cleanupExploreView();
  const container = document.createElement("main");
  container.className = "startup-status";
  const heading = document.createElement("h1");
  heading.textContent = "Página não encontrada";
  const backLink = document.createElement("a");
  backLink.href = "#/";
  backLink.textContent = "Voltar à página inicial";
  backLink.addEventListener("click", (event) => {
    event.preventDefault();
    navigate("#/");
  });
  container.append(heading, backLink);
  app.replaceChildren(container);
}

async function init() {
  if (isLoadingProjects) return;
  isLoadingProjects = true;
  renderStatus("A carregar projetos…");

  try {
    projects = await loadProjects();
    projectsLoaded = true;
    window.removeEventListener("hashchange", router);
    window.addEventListener("hashchange", router);
    await router();
  } catch (error) {
    console.error("Não foi possível carregar os projetos:", error);
    renderStatus(
      "Não foi possível carregar os projetos. Verifique a ligação e tente novamente.",
      init,
    );
  } finally {
    isLoadingProjects = false;
  }
}

init();
