import "../../pages/card.pug";

window.addEventListener("click", (e) => {
  const labels = document.querySelector(".labels");
  const element = labels.querySelector(".label-active");
  if (element && !e.composedPath().includes(element)) {
    element.classList.remove("label-active");
  }
});
