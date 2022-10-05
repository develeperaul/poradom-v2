import "../../pages/choice-element.pug";
import { choiceWrapper } from "../plugins/wrappers";
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
const toggleEl = document.querySelector("[data-toggle_els]");
console.log(document.querySelector("[data-toggle_els]"));
let choiceEL = [];
const observer = new MutationObserver((mutationRecords) => {
  mutationRecords.forEach((item) => {
    if (item.target.classList.contains("toggle-element__active")) {
      if (!choiceEL.includes(item.target)) choiceEL.push(item.target);
      if (
        item.target.getAttribute("data-open-wrapper") !== "first" &&
        item.target.getAttribute("data-open-wrapper") !== "false"
      )
        item.target.setAttribute("data-open-wrapper", "open");
    }
    if (item.target.getAttribute("data-open-wrapper")) {
      // const indexChoice = choiceEL.indexOf(item.target);
      // if (indexChoice !== -1) {
      // console.log(choiceEL[indexChoice]);
      //   choiceEL[indexChoice].removeAttribute("data-open-wrapper");
      // }

      console.log(item.target.getAttribute("data-open-wrapper"));
      if (item.target.getAttribute("data-open-wrapper") !== "false")
        new choiceWrapper().openWrapper();
      item.target.setAttribute("data-open-wrapper", "false");
    }
  });
});
if (toggleEl)
  observer.observe(toggleEl, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

new choiceWrapper();
