// import "../scss/main.scss";
import "../scss/style.scss";
import "./pages/choice-element";
import "./pages/card";

import "../layouts/base-navigation.pug";
import "../index.pug";

//plugins
import toggleGroup from "./plugins/toggle-buttons";
new toggleGroup();

import "./plugins/send-form";
import "./plugins/animate";
import "./plugins/telmask";

import "./plugins/glightbox";

import "./plugins/ticker";

import "./plugins/swiper";

import "./plugins/book";
// import "../scss/_base.scss"

//

//для карты

const popup = document.querySelector("[data-popup]");
if (popup) {
  const close = document.querySelector("[data-close]");
  const body = document.querySelector("body");
  popup.style.transform = "translateY(-100%)";
  const request = document.querySelector("[data-request]");
  const openPopup = function () {
    this.style.transform = "translateY(0%)";
    // this.removeEventListener("animationend", openPopup);
  };
  const closePopup = function () {
    this.style.transform = "translateY(-100%)";
    popup.classList.remove("animate__fadeOutUp");
    // this.removeEventListener("animationend", closePopup);
  };
  request.addEventListener("click", function (e) {
    popup.style.display = "block";
    body.style.overflow = "hidden";
    popup.classList.add("animate__fadeInDown");
  });
  popup.addEventListener("animationend", openPopup);

  close.addEventListener("click", function (e) {
    popup.classList.remove("animate__fadeInDown");
    popup.classList.add("animate__fadeOutUp");
    popup.addEventListener("animationend", closePopup);
  });
}
