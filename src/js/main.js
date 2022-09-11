import "../scss/main.scss";
// import "../scss/style.scss";
import "./pages/choice-element";
import "./pages/card";
import "./pages/card-about";

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


//для карты

document.querySelectorAll(".plan-liters").forEach((plan) => {
  let currentsEl = null;
  const svg = plan.querySelector("svg");
  console.log(plan);

  svg.onmouseover = (e) => {
    let target = e.target.closest("a");
    console.log(target);
    if (target) {
      if (!target) return;
      if (!svg.contains(target)) return;
      const paths = target.querySelectorAll('.path');
      if(paths){
        currentsEl = paths
        paths.forEach(el=>{el.setAttribute('stroke', '#4A8D45'); el.setAttribute('fill', '#4A8D45'); el.setAttribute('fill-opacity', '0.36')})
      }
    }
  }

  svg.onmouseout = (e) => {
    if (!currentsEl) return;
    if(currentsEl){
      currentsEl.forEach(el=>{el.setAttribute('stroke', 'white'); el.setAttribute('fill', 'white'); el.setAttribute('fill-opacity', '0.16')})
    }
  }

})


console.log(document.querySelectorAll(".plan-liters-home"));
document.querySelectorAll(".plan-liters-home").forEach(plan=>{
  const svg = plan.querySelector("svg");

  const paths = svg.querySelectorAll('path')
  let activePath = null
  paths.forEach(path=>{
    const status = path.getAttribute('data-status')
    console.log(status);
    if(status === 'free'){
      path.setAttribute('opacity', 0)
    }

    path.onclick = function(e){
      if(activePath && activePath !== this) {
        console.log(activePath);
        activePath.setAttribute('opacity', 0)
        activePath.removeAttribute('data-active')
      }
      if(this.getAttribute('data-active') === 'active'){
        const location = this.getAttribute('data-location')
        if(location)window.location.href = location
      }
      this.setAttribute('opacity', 1)
      this.setAttribute('data-active', 'active')
      activePath = this
      
    }
  })
})


document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".nav");
    const headerNav = document.querySelector(".nav__top_fixed");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        console.log(headerNav);
        headerNav.style.display = "block";
        setTimeout(() => {
          headerNav.classList.add("nav__top_fixed-open");
        }, 200);
      } else {
        headerNav.style.display = "none";
        setTimeout(() => {
          headerNav.classList.remove("nav__top_fixed-open");
        }, 200);
      }
    });
  
});