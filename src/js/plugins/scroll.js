document.querySelectorAll('a[href^="#"').forEach((link) => {
  link.addEventListener("click", function (e) {
    let href = this.getAttribute("href").substring(1);
    if (href) {
      e.preventDefault();

      const scrollTarget = document.getElementById(href);
      const topNav = document.querySelector(".nav__top_fixed");
      topNav.style.display = "block";
      let topOffset = document.querySelector(".nav__top_fixed").offsetHeight;
      if (!topNav) topOffset = 0;
      // const topOffset = 0; // если не нужен отступ сверху
      if (scrollTarget) {
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;
        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});
