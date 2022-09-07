import Validate from "./validateform";

const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  console.log(form);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valid = new Validate(form).valid;
    if (valid) {
    }
  });
});
