export function renderHome(app, navigate) {
  const page = document.createElement("main");
  page.className = "home-page";

  const header = document.createElement("header");
  header.className = "site-header";
  const brand = document.createElement("a");
  brand.className = "brand";
  brand.href = "#/";
  brand.textContent = "BIM-AR";
  header.append(brand);

  const content = document.createElement("section");
  content.className = "home-content";

  const eyebrow = document.createElement("p");
  eyebrow.className = "eyebrow";
  eyebrow.textContent = "Projetos de construção";

  const heading = document.createElement("h1");
  heading.textContent = "Do projeto à realidade.";

  const introduction = document.createElement("p");
  introduction.className = "intro";
  introduction.textContent =
    "Submeta um projeto para demonstração ou explore os modelos disponíveis no mapa.";

  const choices = document.createElement("div");
  choices.className = "home-choices";
  choices.append(
    createChoice(
      "Submeter projeto",
      "Carregue um ficheiro IFC e preencha os dados do projeto.",
      "Começar submissão",
      "#/submeter",
      () => navigate("#/submeter"),
    ),
    createChoice(
      "Explorar projetos",
      "Consulte os projetos no mapa e visualize os modelos em 3D ou realidade aumentada.",
      "Abrir mapa",
      "#/explorar",
      () => navigate("#/explorar"),
    ),
  );

  content.append(eyebrow, heading, introduction, choices);
  page.append(header, content);
  app.replaceChildren(page);
}

function createChoice(titleText, descriptionText, linkText, href, onClick) {
  const card = document.createElement("article");
  card.className = "choice-card";

  const title = document.createElement("h2");
  title.textContent = titleText;
  const description = document.createElement("p");
  description.textContent = descriptionText;
  const link = document.createElement("a");
  link.className = "primary-link";
  link.href = href;
  link.textContent = linkText;
  link.addEventListener("click", (event) => {
    event.preventDefault();
    onClick();
  });

  card.append(title, description, link);
  return card;
}
