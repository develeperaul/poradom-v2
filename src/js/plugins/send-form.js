import Validate from "./validateform";
let suc = false;
const forms = document.querySelectorAll("form");
forms.forEach((form) => {
  console.log(form);
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const valid = new Validate(form).valid;
    console.log(valid);
    if (valid) {
      // setTimeout(()=>{
      //   const buttonSucces = document.querySelector('[data-succes')
      //   const parent = form.closest('[data-popup]')

      //   const parentStyle = parent?.getAttribute('data-style')
      //   if(parentStyle){
      //     buttonSucces.setAttribute('data-popupType', `thank-${parentStyle}`)
      //   }else buttonSucces.setAttribute('data-popupType', 'thank')

      //   buttonSucces.click()
      // }, 1000)
      formReq(form)
    }
  });
});

// для запросов 

const formReq = async (form) => {
  const url = "https://andersen-ufa.ru/amo_lead.php";
  const formData = new FormData();
  const fields = form.querySelectorAll("input");
  const theme = form.getAttribute("data-theme");
  Array.from(fields).forEach((field) => {
    formData.append("lead_name", theme ? theme : "");
    if (field.name) {
        formData.append(field.name, field.value);
    }
  });

  let success = false;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((responce) => {
      if (responce.status === 200) {
        const buttonSucces = document.querySelector('[data-succes')
        const parent = form.closest('[data-popup]')

        const parentStyle = parent?.getAttribute('data-style')
        if(parentStyle){
          buttonSucces.setAttribute('data-popupType', `thank-${parentStyle}`)
        }else buttonSucces.setAttribute('data-popupType', 'thank')

        buttonSucces.click()
      }
    })
    .catch((e) => console.log(e));
  return success;
};
