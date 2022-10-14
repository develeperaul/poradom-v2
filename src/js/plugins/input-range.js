// const inputs=document.querySelectorAll("[data-range]");
const parents = document.querySelectorAll("[data-inputs-range]");
for (let e of document.querySelectorAll(
  'input[type="range"].slider-progress'
)) {
  e.style.setProperty("--value", e.value);
  e.style.setProperty("--min", e.min == "" ? "0" : e.min);
  e.style.setProperty("--max", e.max == "" ? "100" : e.max);
  e.addEventListener("input", () => {
    e.style.setProperty("--value", e.value);
  });
}

parents.forEach((parent) => {
  const inputs = Array.from(document.querySelectorAll("[data-range]"));
  inputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const inputPrev = inputs.find(
        (el) =>
          el.closest("[data-inputs-range]") ===
            input.closest("[data-inputs-range]") && el !== input
      );
      if (input.getAttribute("type") === "range") {
        inputPrev.value = input.value;
        // inputPrev.blur();
        let event = new Event("input", {
          bubbles: true,
          cancelable: true,
        });
        setTimeout(() => {
          inputPrev.dispatchEvent(event);
        }, 0);
      } else if (input === document.activeElement) {
        inputPrev.value = input.value;
        let event = new Event("input", {
          bubbles: true,
          cancelable: true,
        });
        setTimeout(() => {
          inputPrev.dispatchEvent(event);
        }, 0);
      }
    });
  });
});
