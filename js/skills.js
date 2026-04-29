function createSkillCard(skill) {
  const card = document.createElement("article");
  card.className = "skill-card reveal";
  card.setAttribute("role", "listitem");

  const iconWrap = document.createElement("div");
  iconWrap.className = "skill-card__icon-wrap";

  const icon = document.createElement("img");
  icon.className = "skill-card__icon";
  icon.src = skill.icon;
  icon.alt = skill.alt;
  icon.loading = "lazy";
  icon.decoding = "async";

  const title = document.createElement("h3");
  title.className = "skill-card__name";
  title.textContent = skill.name;

  iconWrap.appendChild(icon);
  card.append(iconWrap, title);

  return card;
}

export function renderSkills(skills) {
  const skillsGrid = document.querySelector("#skills-grid");
  if (!skillsGrid || !Array.isArray(skills)) {
    return;
  }

  const fragment = document.createDocumentFragment();
  skills.forEach((skill) => fragment.appendChild(createSkillCard(skill)));
  skillsGrid.replaceChildren(fragment);
}
