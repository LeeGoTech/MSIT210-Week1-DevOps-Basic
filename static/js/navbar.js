document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");
  const root = document.documentElement;

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    root.setAttribute("data-theme", savedTheme);
    updateIcon(savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    if (theme === "dark") {
      themeIcon.classList.remove("bx-sun");
      themeIcon.classList.add("bx-moon");
    } else {
      themeIcon.classList.remove("bx-moon");
      themeIcon.classList.add("bx-sun");
    }
  }

  const menuBtn = document.getElementById("menuBtn");
  const offcanvas = document.getElementById("offcanvas");
  const offcanvasBody = document.getElementById("offcanvasBody");
  const offcanvasClose = document.getElementById("offcanvasClose");
  const overlay = document.getElementById("offcanvasOverlay");

  const nav = document.getElementById("navigationBar");

  const menuHTML = `
    <ul class="navbar-nav d-flex align-items-center flex-column">
      ${nav.innerHTML}
    </ul>
  `;

  function handleMenu() {
    if (window.innerWidth < 576) {
      if (!offcanvasBody.querySelector("ul")) {
        offcanvasBody.innerHTML = menuHTML;
      }
    } else {
      offcanvasBody.innerHTML = "";
      offcanvas.classList.remove("show");
      overlay.classList.remove("show");
    }
  }

  menuBtn.addEventListener("click", () => {
    offcanvas.classList.add("show");
    overlay.classList.add("show");
  });

  offcanvasClose.addEventListener("click", () => {
    offcanvas.classList.remove("show");
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", () => {
    offcanvas.classList.remove("show");
    overlay.classList.remove("show");
  });

  handleMenu();
  window.addEventListener("resize", handleMenu);
});