function createStackItems(stack) {
  const list = document.createElement("ul");
  list.className = "project-card__stack";

  stack.forEach((item) => {
    const badge = document.createElement("li");
    badge.textContent = item;
    list.appendChild(badge);
  });

  return list;
}

function createProjectCard(project) {
  const card = document.createElement("article");
  card.className = "project-card reveal";
  card.setAttribute("role", "listitem");

  const media = document.createElement("figure");
  media.className = "project-card__media";

  const image = document.createElement("img");
  image.src = project.image;
  image.alt = project.alt;
  image.loading = "lazy";
  image.decoding = "async";

  media.appendChild(image);

  const title = document.createElement("h3");
  title.className = "project-card__title";
  title.textContent = project.name;

  const description = document.createElement("p");
  description.className = "project-card__description";
  description.textContent = project.description;

  const link = document.createElement("a");
  link.className = "project-card__link";
  link.href = project.repo;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "See Project";

  card.append(media, createStackItems(project.stack), title, description, link);

  return card;
}

export function renderProjects(projects) {
  const projectsGrid = document.querySelector("#projects-grid");
  if (!projectsGrid || !Array.isArray(projects)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  projects.forEach((project) =>
    fragment.appendChild(createProjectCard(project)),
  );
  projectsGrid.replaceChildren(fragment);
}
