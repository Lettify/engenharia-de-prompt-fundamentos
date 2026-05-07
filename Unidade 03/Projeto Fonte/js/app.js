const currentPath = window.location.pathname.split("/").pop();

document.querySelectorAll("[data-nav]").forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
  }
});

document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll("[data-admin-trigger]").forEach((trigger) => {
  let clickCount = 0;
  let clickTimer = null;

  trigger.addEventListener("click", () => {
    clickCount += 1;

    if (clickCount === 1) {
      clickTimer = window.setTimeout(() => {
        clickCount = 0;
      }, 800);
    }

    if (clickCount === 3) {
      window.clearTimeout(clickTimer);
      clickCount = 0;
      window.location.href = "admin.html";
    }
  });
});
