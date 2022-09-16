import "../../index.pug";

const labelObserver = new IntersectionObserver(
  ([entry]) => {
    if (entry.intersectionRatio > 0.5) {
      entry.target;
      // animate__fadeIn;
      const labels = entry.target.querySelectorAll(".label");

      labels.forEach((label) => label.classList.add("animate__fadeIn"));
    }
  },
  {
    threshold: [0.25, 0.5, 0.75],
  }
);
console.log(marquee);
const marquee = document.querySelector(".marquee");
if (marquee) labelObserver.observe(marquee);
