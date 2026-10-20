const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Lukk meny" : "Åpne meny");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Åpne meny");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const notice = document.querySelector(".demo-notice");
const closeNotice = document.querySelector(".notice-close");
if (notice && closeNotice) {
  closeNotice.addEventListener("click", () => notice.remove());
}
