export const choiceWrapper = class WrapperChoice {
  constructor() {
    this.wrapper = document.querySelector("[data-wrapper]");
    if (this.wrapper) {
      this.wrapper.onclick = this.closeWrapper;
    }
  }

  openWrapper() {
    this.wrapper.style.display = "block";
  }
  closeWrapper() {
    this.style.display = "none";
    const activeToggleEl = document.querySelector(".toggle-element__active");
    const map = activeToggleEl.querySelector(".plan__map");
  }
};
