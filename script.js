const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("change");
});

// smooth transition and active link
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Remove 'active' class from all links
      navLinks.forEach((link) => link.classList.remove("active"));

      // Add 'active' class to the clicked link
      link.classList.add("active");

      // Scroll to the corresponding section
      const targetSection = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top:
          targetSection.offsetTop -
          document.querySelector("header").offsetHeight,
        behavior: "smooth",
      });
    });
  });

  // Highlight the active section link on scroll
  window.addEventListener("scroll", () => {
    let current = "";

    document.querySelectorAll("section").forEach((section) => {
      const sectionTop =
        section.offsetTop - document.querySelector("header").offsetHeight;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
      console.log("scrollY", scrollY);
      console.log("sectionTop", sectionTop);
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add("active");
      }
    });
  });
});
