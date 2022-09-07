import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/grid";
import "swiper/css/pagination";
import Swiper, { Navigation, Pagination, Grid, Autoplay } from "swiper";

new Swiper('.mainSwiper', {
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