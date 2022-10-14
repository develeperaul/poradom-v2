import "../../pages/card-about.pug";
import { mainSwiper } from "../plugins/swiper";
document.addEventListener("DOMContentLoaded", () => {
  let selected = "what";
  const buttons = document.querySelectorAll("[data-select]");
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const data = button.getAttribute("data-select");
      selected = data;
      setSelected(buttons, selected);
    });
  });
});

//  const toggleSwiper = (type, modalEl, index) => {
//    if (modalEl.querySelector(".swiper")) {
//      if (stories && Array.from(stories).length === 0) {
//        stories[type]();
//        stories.autoplay.start();
//        stories.slideToLoop(0);
//      }
//      if (stories && Array.from(stories).length !== 0) {
//        stories[index][type]();
//        stories[index].autoplay.start();
//        stories[index].slideToLoop(0);
//      }
//    }
//  };

// toggleSwiper("init", modalElem, index);
// toggleSwiper("enable", modalElem, index);

const setSelected = function (elements, choice) {
  const sliders = document.querySelectorAll(".home-card-about-slider");
  // console.log(sliders[0] === mainSwiper[0].el);
  // console.log(mainSwiper[0].el);
  sliders.forEach((slider) => {
    const sliderId = slider.getAttribute("id");
    if (sliderId === choice) {
      if (mainSwiper) mainSwiper.find((sl) => sl.el === slider).enable();
      slider.style.display = "block";
    } else {
      if (mainSwiper) mainSwiper.find((sl) => sl.el === slider).disable();
      slider.style.display = "none";
    }
  });
  elements.forEach((el) => {
    if (el.getAttribute("data-select") === choice) {
      if (el.classList.contains("button_none-bg"))
        el.classList.remove("button_none-bg");

      el.classList.add("button__blue");
    } else {
      if (el.classList.contains("button__blue"))
        el.classList.remove("button__blue");

      el.classList.add("button_none-bg");
    }
  });
};
