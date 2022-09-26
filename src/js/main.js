// import "../scss/main.scss";
import "./pages/index";
import "../scss/style.scss";
import "./pages/choice-element";
import "./pages/card";
import "./pages/card-about";

import "../layouts/base-navigation.pug";

//plugins
import "./plugins/input-range";
import toggleGroup from "./plugins/toggle-buttons";
new toggleGroup();

import "./plugins/send-form";
import "./plugins/animate";
import "./plugins/telmask";
import "./plugins/marguee";

import "./plugins/glightbox";

import "./plugins/ticker";

import "./plugins/swiper";

import "./plugins/book";

import "./plugins/scroll";

// import "../scss/_base.scss"

//для карты
const requests = document.querySelectorAll("[data-request]");
let activePopup = null;
let nextPupop = null;
const body = document.querySelector("body");
const activatedPopup = function (el) {
  new Promise((resolve, reject) => {
    const openPopup = function (event) {
      event.stopPropagation();
      this.style.transform = "translateY(0%)";
    };

    el.addEventListener("animationend", openPopup, { once: true });
  });
};
requests.forEach((request) => {
  request.addEventListener("click", function (e) {
    const popupType = request.getAttribute("data-popupType");
    console.log(popupType);
    const popup = document.querySelector(`[data-${popupType}]`);
    console.log(popup);
    popup.style.display = "block";
    body.style.overflow = "hidden";
    popup.classList.add("animate__fadeInDown");
    if (activePopup) {
      if (activePopup !== popup) {
        nextPupop = popup;
        activePopup.querySelector("[data-close]").click();
      }
    } else {
      activePopup = popup;
      nextPupop = null;
      activatedPopup(popup);
    }
  });
});
const popups = document.querySelectorAll("[data-popup]");
if (popups) {
  popups.forEach((popup) => {
    const close = popup.querySelector("[data-close]");
    if (close) {
      close.addEventListener("click", function (e) {
        console.log(popups);
        popup.classList.remove("animate__fadeInDown");
        popup.classList.add("animate__fadeOutUp");
        new Promise((resolve, reject) => {
          const closePopup = function (event, el) {
            event.stopPropagation();
            el.style.transform = "translateY(-100%)";
            el.classList.remove("animate__fadeOutUp");
            body.style.overflow = "auto";
            activePopup = null;
            // if(nextPopup){
            //   activatedPopup(nextPupop)
            // }
            resolve("Animation ended");
          };

          popup.addEventListener("animationend", (e) => closePopup(e, popup), {
            once: true,
          });
        });
      });
    }
  });
}
// const popups = document.querySelectorAll("[data-popup]");
// let activePopup = null
// if (popups) {
//   popups.forEach(popup=>{

//     const close = popup.querySelector("[data-close]");
//     const body = document.querySelector("body");
//     popup.style.transform = "translateY(-100%)";
//     const requests = document.querySelectorAll("[data-request]");
//     const openPopup = function () {

//       this.style.transform = "translateY(0%)";
//       // this.removeEventListener("animationend", openPopup);
//     };
//     // const closePopup = function (el) {
//     //   el.style.transform = "translateY(-100%)";
//     //   el.classList.remove("animate__fadeOutUp");
//     //   body.style.overflow = "auto";
//     //   // this.removeEventListener("animationend", closePopup);
//     // };
//     requests.forEach(request=> {
//       request.addEventListener("click", function (e) {

//         if(activePopup) {
//           activePopup.querySelector("[data-close]").click();
//         }
//         activePopup = popup
//         popup.style.display = "block";
//         body.style.overflow = "hidden";
//         popup.classList.add("animate__fadeInDown");
//       });

//     })
//     popup.addEventListener("animationend", openPopup);

//     close.addEventListener("click", function (e) {
//       activePopup = null
//       popup.classList.remove("animate__fadeInDown");
//       popup.classList.add("animate__fadeOutUp");

//       new Promise((resolve, reject) => {
//         const closePopup = function (event,el) {
//           event.stopPropagation();
//           el.style.transform = "translateY(-100%)";
//           el.classList.remove("animate__fadeOutUp");
//           body.style.overflow = "auto";
//           openPopup = null
//           resolve("Animation ended");
//         };

//         popup.addEventListener("animationend", (e)=>closePopup(e,popup), { once: true });

//       })

//     });
//   })
// }

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
      const paths = target.querySelectorAll(".path");
      if (paths) {
        currentsEl = paths;
        paths.forEach((el) => {
          el.setAttribute("stroke", "#4A8D45");
          el.setAttribute("fill", "#4A8D45");
          el.setAttribute("fill-opacity", "0.36");
        });
      }
    }
  };

  svg.onmouseout = (e) => {
    if (!currentsEl) return;
    if (currentsEl) {
      currentsEl.forEach((el) => {
        el.setAttribute("stroke", "white");
        el.setAttribute("fill", "white");
        el.setAttribute("fill-opacity", "0.16");
      });
    }
  };
});

console.log(document.querySelectorAll(".plan-liters-home"));
document.querySelectorAll(".plan-liters-home").forEach((plan) => {
  const svg = plan.querySelector("svg");

  const paths = svg.querySelectorAll("path");
  let activePath = null;
  paths.forEach((path) => {
    const status = path.getAttribute("data-status");
    if (status === "free") {
      path.setAttribute("opacity", 0);
    }

    path.onclick = function (e) {
      const location = this.getAttribute("data-location");
      if (location) window.location.href = location;
      // if (activePath && activePath !== this) {
      //   console.log(activePath);
      //   activePath.setAttribute("opacity", 0);
      //   activePath.removeAttribute("data-active");
      // }
      // if (this.getAttribute("data-active") === "active") {
      // }
      // this.setAttribute("opacity", 1);
      // this.setAttribute("data-active", "active");
      // activePath = this;
    };
    path.onmouseover = function (e) {
      this.setAttribute("opacity", 1);
    };
    path.onmouseout = function (e) {
      this.setAttribute("opacity", 0);
    };
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const headerNav = document.querySelector(".nav__top_fixed");
  const menu = document.querySelector(".menu");
  if (headerNav) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        // console.log(headerNav);
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
  }

  if (menu) {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > header.offsetHeight) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
    });
  }
});

//попап на карте
document.addEventListener("DOMContentLoaded", () => {
  const ishs = document.querySelector("[data-plan-path]");
  const svg = document.querySelector("[data-svg-default]");
  console.log(svg);
  if (ishs) {
    ishs.addEventListener("click", (event) => {
      const dataPopup = document.querySelector(".plan__popup");
      const planMapCoords = svg.getBoundingClientRect();
      const xCoord = event.clientX - planMapCoords.left;
      const yCoord = event.clientY - planMapCoords.top;
      dataPopup.style.display = "block";
      dataPopup.style.top = yCoord + "px";
      dataPopup.style.left = xCoord + "px";
      dataPopup.style.transform = "translate(-50%, -110%)";
      console.log(event.clientX);
    });
  }
});

function getPayment(sum, period, rate) {
  var i, koef, result;

  // ставка в месяц
  i = rate / 12 / 100;

  // коэффициент аннуитета
  koef =
    (i * Math.pow(1 + i, period * 12)) / (Math.pow(1 + i, period * 12) - 1);

  // итог
  result = sum * koef;

  // округлим до целых
  return result.toFixed();
}
function setPrefix(input, val, end) {
  const newvalue = val;
  let div = document.createElement("div");
  div.className = "prefix";
  div.textContent = end;
  input.parentElement.append(div);
  input.style.setProperty("padding-right", div.offsetWidth + 10 + "px");
  input.value = isNaN(val) ? null : newvalue;
}

const formCalc = document.querySelector("#calc-1");
if (formCalc) {
  const inputs = formCalc.querySelectorAll("[data-calc-field]");
  const month = formCalc.querySelector("[data-input='month']");
  let period, rate, house, initial;

  inputs.forEach((input) => {
    console.log(input.dataset.house);
    input.parentNode.style.setProperty("position", "relative");
    if (input.dataset.input === "house") {
      setPrefix(input, 12500000, "руб");
      house = input.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }

    if (input.dataset.input === "initial") {
      setPrefix(input, 5000000, "руб");
      initial = input.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }

    // if(input.dataset.input === 'month') setPrefix(input, 10, 'руб / мес')

    if (input.dataset.input === "period") {
      setPrefix(input, 5, "лет");
      period = input.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }

    if (input.dataset.input === "rate") {
      setPrefix(input, 8, "%");
      rate = input.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    }
    setPrefix(month, getPayment(house - initial, period, rate), "руб / мес");
    input.addEventListener("input", (e) => {
      if (e.target.value.replace(/[^\d]/gm, "") !== "") {
        const val = e.target.value
          .replace(/[^0-9.]/g, "")
          .replace(/(\..*)\./g, "$1");

        if (input.dataset.input === "initial") {
          initial = val;
        }
        if (input.dataset.input === "period") {
          period = val;
        }
        if (input.dataset.input === "house") {
          house = val;
        }
        if (input.dataset.input === "rate") {
          rate = val;
        }
        setPrefix(month, getPayment(house - initial, period, rate), null);
      }
    });
    // if (input.dataset.input === "period")
    //   input.setAttribute("data-period", "10");
    // if (input.dataset.input === "initial")
    //   input.setAttribute("data-minimum", button.dataset.minimum);
  });
  console.log(month);
}
