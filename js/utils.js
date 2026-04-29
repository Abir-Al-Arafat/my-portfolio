export async function fetchText(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }

  return response.text();
}

export async function fetchJSON(path) {
  const response = await fetch(path);

  if (!response.ok) {
    throw new Error(`Failed to load ${path}: ${response.status}`);
  }

  return response.json();
}

export function revealOnScroll(selector = ".reveal") {
  const elements = document.querySelectorAll(selector);

  if (!elements.length) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -80px 0px",
      threshold: 0.15,
    },
  );

  elements.forEach((element) => observer.observe(element));
}
