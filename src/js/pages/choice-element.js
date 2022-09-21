import "../../pages/choice-element.pug";

const path = window.location.search;

if (path) {
  if (path.indexOf("liter") !== -1) {
    const id = path
      .match(/liter=[-+]?[0-9]*\.?[0-9]+/g)[0]
      .replace("liter=", "");
    if (id) {
      const litersComponent = document.querySelector(`#plan_1-${id}`);
      if (litersComponent) {
        const toggleComponent = document.querySelectorAll(".toggle-element");
        toggleComponent.forEach((component) => {
          if (component.classList.contains("toggle-element__active"))
            component.classList.remove("toggle-element__active");
        });
        litersComponent.classList.add("toggle-element__active");
      }
    }
  }
}

const wrapper = document.querySelector("[data-wrapper]");
if (wrapper) {
  wrapper.onclick = function () {
    this.style.display = "none";
    const activeToggleEl = document.querySelector(".toggle-element__active");
    const map = activeToggleEl.querySelector(".plan__map");
    map.scrollTo(100, 0);
  };
}
