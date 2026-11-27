const frame = document.querySelector("#page-frame");
const buttons = document.querySelectorAll("[data-page]");
const menu = document.querySelector("#page-navigation");
const menuToggle = document.querySelector(".menu-toggle");
const menuClose = document.querySelector(".menu-close");
const mobileMenuQuery = window.matchMedia("(max-width: 700px)");

const setMenuState = (isOpen) => {
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menu.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    menuClose.focus();
  } else if (mobileMenuQuery.matches) {
    menuToggle.focus();
  }
};

menuToggle.addEventListener("click", () => setMenuState(true));
menuClose.addEventListener("click", () => setMenuState(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) {
    setMenuState(false);
  }
});

mobileMenuQuery.addEventListener("change", (event) => {
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", String(event.matches));
});

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    buttons.forEach((item) => item.removeAttribute("aria-current"));
    button.setAttribute("aria-current", "page");
    frame.src = button.dataset.page;
    frame.title = button.dataset.title;

    if (mobileMenuQuery.matches) {
      setMenuState(false);
    }
  }),
);

menu.setAttribute("aria-hidden", String(mobileMenuQuery.matches));
