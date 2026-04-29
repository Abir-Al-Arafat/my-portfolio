import { initNavbar } from "./navbar.js";
import { renderProjects } from "./projects.js";
import { renderSkills } from "./skills.js";
import { fetchJSON, fetchText, revealOnScroll } from "./utils.js";

const app = document.querySelector("#app");

async function loadSections() {
  const sectionOrder = [
    "navbar",
    "hero",
    "skills",
    "projects",
    "contact",
    "footer",
  ];
  const contentMap = await Promise.all(
    sectionOrder.map((name) => fetchText(`sections/${name}.html`)),
  );

  const main = document.createElement("main");
  main.id = "main-content";

  app.replaceChildren();

  contentMap.forEach((content, index) => {
    const template = document.createElement("template");
    template.innerHTML = content.trim();
    const element = template.content.firstElementChild;

    if (!element) {
      return;
    }

    if (index === 0 || index === contentMap.length - 1) {
      app.appendChild(element);
    } else {
      main.appendChild(element);
    }
  });

  app.insertBefore(main, app.lastElementChild);
}

async function loadData() {
  const [skills, projects] = await Promise.all([
    fetchJSON("data/skills.json"),
    fetchJSON("data/projects.json"),
  ]);

  renderSkills(skills);
  renderProjects(projects);
}

function updateFooterYear() {
  const year = document.querySelector("#footer-year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

async function bootstrap() {
  try {
    await loadSections();
    await loadData();

    initNavbar();
    revealOnScroll();
    updateFooterYear();
  } catch (error) {
    app.innerHTML = `<div class="loading-state loading-state--error">Unable to load portfolio. ${error.message}</div>`;
  }
}

bootstrap();
