const animateCSS = (node, animation, prefix = "animate__") =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    node.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

//для карточки при нажатии на ярлыки

const cardIcons = document.querySelectorAll(".label-home");
const verifyClass = (parentClass, className) => {
  const parent = document.querySelector(parentClass);
  const element = parent.querySelector(className);
  if (element) {
    element.classList.remove(className.replace(".", ""));
    return element;
  }
};
const openEl = function (e) {
  verifyClass(".labels", ".label-active");
  const parent = this.parentNode;
  parent.classList.toggle("label-active");
};

if (cardIcons) {
  cardIcons.forEach((el) => {
    console.log(el);
    el.addEventListener("click", openEl);
  });
}

export { verifyClass };
