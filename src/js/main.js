import "../index.html"
import "../scss/main.scss";

//plugins

import Validate from "./plugins/validateform";
import "./plugins/telmask";
// import "../scss/_base.scss"

//для заглушки

const step1 = document.querySelector('[data-step-1]')
const step2 =document.querySelector('[data-step-2]')
const buttonStart = document.querySelector('[data-to_form]')
const buttonClose = document.querySelector('[data-close]')

const removeClasses =  (el,prefix)=>{

    const classes = el.className.split(" ").filter(function(c) {
    return c.lastIndexOf(prefix, 0) !== 0;
});
console.log(classes)
el.className = classes.join(" ").trim();
}
const step1Somthing = ()=>{
    step2.removeEventListener('animationend', step2Somthing);
    removeClasses(step1, 'animate__')
    removeClasses(step2, 'animate__')
    step1.style.setProperty('display', 'none')
    step2.style.setProperty('display', 'block')
    step2.classList.add('animate__animated', 'animate__bounceInDown');
}

buttonStart.onclick = ()=>{
    step1.classList.add('animate__animated', 'animate__fadeOutDown');
    step1.addEventListener('animationend', step1Somthing);
}

const step2Somthing = ()=>{
    
    step2.style.setProperty('display', 'none')
    step1.classList.remove('animate__animated','animate__fadeOutDown');
    step1.style.setProperty('display', 'flex  ')
    step1.classList.add('animate__animated','animate__fadeInUp');
}

buttonClose.onclick = ()=> {
    step1.removeEventListener('animationend', step1Somthing);
    step2.classList.remove('animate__animated','animate__bounceInDown');
    step2.classList.add('animate__animated', 'animate__bounceOutUp');
    step2.addEventListener('animationend', step2Somthing)
}


const form = document.querySelector("[data-form]")
form.addEventListener("submit", async function(event){
    event.preventDefault();
    const valid = new Validate(form).valid
    if(valid)formReq(form)
})
const formReq = async (form) => {
  const url = "/ajax.php";
  const formData = new FormData();
  const fields = form.querySelectorAll("input");
  Array.from(fields).forEach((field) => {
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
        success = true;
      }
    })
    .catch((e) => console.log(e));
  return success;
};

