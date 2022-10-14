export default class toggleGroup {
  constructor() {
    this.name = document.querySelector(`.toggle-btns`);
    const btns = document.querySelectorAll("[data-toggle]");

    if (btns) {
      Array.from(btns).forEach((button) => {
        button.onclick = (e) => {
          const id = button.getAttribute("data-toggle");
          const toggleEl = document.querySelector(`#${id}`);
          const buttonParent = button.parentNode.querySelectorAll("button");

          const toggleElParent =
            toggleEl.parentNode.querySelectorAll("[data-toggle_el]");

          if (
            toggleEl &&
            !toggleEl.classList.contains("toggle-element__active") &&
            toggleElParent
          ) {
            Array.from(buttonParent).forEach((btn) => {
              btn.classList.remove("button__round_active");
              button.classList.add("button__round_active");
            });
            Array.from(toggleElParent).forEach((el) => {
              el.classList.remove("toggle-element__active");
              toggleEl.classList.add("toggle-element__active");
            });
          }
        };
      });
    }
  }
}
