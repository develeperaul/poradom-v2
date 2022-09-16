let pages = document.getElementsByClassName("page");
if (pages) {
  let countPage = 0;
  Array.from(pages)
    .reverse()
    .forEach((page, index, arr) => {
      if (index < arr.length - 3) console.log(page);
    });
  console.log(Array.from(pages).reverse());
  for (let i = 0; i < pages.length; i++) {
    let page = pages[i];
    pages[0].classList.add("flipped");
    pages[0].nextElementSibling.classList.add("flipped");
    if (i == 0) {
      countPage = countPage + 2;
    }
    if (i % 2 === 0) {
      page.style.zIndex = pages.length - i;
    }
    console.log(countPage);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const parent = document.querySelector(".book");
    if (parent) {
      const next = parent.querySelector(".swiper-next");
      const prev = parent.querySelector(".swiper-prev");
      next.onclick = function () {
        if (countPage !== pages.length - 2) {
          // console.log(pages[countPage]);
          // console.log(pages[countPage].nextElementSibling);
          pages[countPage].classList.add("flipped");
          pages[countPage].nextElementSibling.classList.add("flipped");
          countPage = countPage + 2;
        } else {
          countPage = 0;
          Array.from(pages)
            .reverse()
            .forEach((page, index, arr) => {
              if (index < arr.length - 2) {
                page.classList.remove("flipped");
              }
            });
          countPage = countPage + 2;
        }
      };
      prev.onclick = function () {
        if (countPage !== 2) {
          countPage = countPage - 1;
          console.log(pages[countPage]);
          console.log(pages[countPage].previousElementSibling);
          pages[countPage].classList.remove("flipped");
          pages[countPage].previousElementSibling.classList.remove("flipped");
          countPage = countPage - 1;
        }
      };
    }
  });
}
