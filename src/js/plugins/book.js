let pages = document.getElementsByClassName("page");
let countPage = 0;
for (let i = 0; i < pages.length; i++) {
  console.log("hi");
  let page = pages[i];
  pages[0].classList.add("flipped");
  pages[0].nextElementSibling.classList.add("flipped");
  if (i == 0) {
    countPage = countPage + 2;
  }
  if (i % 2 === 0) {
    page.style.zIndex = pages.length - i;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const parent = document.querySelector(".book");
  const next = parent.querySelector(".swiper-next");
  const prev = parent.querySelector(".swiper-prev");
  next.onclick = function () {
    if (countPage !== pages.length - 1) {
      console.log(pages[countPage]);
      console.log(pages[countPage].nextElementSibling);
      pages[countPage].classList.add("flipped");
      pages[countPage].nextElementSibling.classList.add("flipped");
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
  // for(let i = 0; i < pages.length; i++)
  //   {
  //     //Or let page = pages[i];
  //     pages[i].pageNum = i + 1;
  //     pages[i].onclick=function()
  //     {
  //       if(this.pageNum !== 2 && this.pageNum !==pages.length - 1){
  //         if (this.pageNum % 2 === 0)
  //           {
  //             this.classList.remove('flipped');
  //             this.previousElementSibling.classList.remove('flipped');
  //           }
  //         else
  //           {
  //             this.classList.add('flipped');
  //             this.nextElementSibling.classList.add('flipped');
  //           }
  //       }
  //        }
  //     }
});
