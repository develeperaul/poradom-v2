import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import Swiper, { Navigation, Pagination,Mousewheel , Autoplay } from "swiper";

new Swiper(".mainSwiper", {
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  pagination: {
    dynamicBullets: true,
    el: ".swiper-pagination",
    bulletActiveClass: "dot-active",
    bulletClass: "dot",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

new Swiper(".fractionSwiper", {
  autoHeight: true,
  modules: [Navigation, Pagination, Autoplay],
  loop: true,
  pagination: {
    type: "fraction",
    el: ".swiper-fraction",
    bulletActiveClass: "numb-active",
    bulletClass: "numb",
    renderFraction: function (currentClass, totalClass) {
      console.log(
        '<span class="' +
          "0" +
          currentClass +
          '"></span>' +
          " of " +
          '<span class="' +
          totalClass +
          '"></span>'
      );
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "/" +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

new Swiper(".fractionCardSwiper", {
  modules: [Navigation, Pagination, Autoplay],
  // loop: true,
  spaceBetween: 16,
  pagination: {
    type: "fraction",
    el: ".swiper-fraction",
    bulletActiveClass: "numb-active",
    bulletClass: "numb",
    renderFraction: function (currentClass, totalClass) {
      console.log(
        '<span class="' +
          "0" +
          currentClass +
          '"></span>' +
          " of " +
          '<span class="' +
          totalClass +
          '"></span>'
      );
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "/" +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

new Swiper(".floorsSwiper", {
  modules: [Navigation, Pagination, Autoplay],
  spaceBetween: 16,
  loop: true,
  direction: "vertical",
  simulateTouch: false,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination-floor",
    progressbarOpposite: true,
    bulletActiveClass: "floor-active",
    bulletClass: "floor",
    type: "bullets",
    clickable: true,
    renderBullet: function (index, className) {
      let spaceBottom = index !== 0 ? "mt-2.5 xl:mt-5" : "";
      return (
        '<span class="' +
        spaceBottom +
        " " +
        className +
        '"> <span>' +
        (index + 1) +
        "</span> </span>"
      );
    },
  },
});

new Swiper(".convertSwiper", {
  modules: [Mousewheel],
  spaceBetween: 16,
  rabCursor: true,
  mousewheel: true,
  direction: "vertical",
})
