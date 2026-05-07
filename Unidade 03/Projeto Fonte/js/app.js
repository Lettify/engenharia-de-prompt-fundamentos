const currentPath = window.location.pathname.split("/").pop();

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});
