import "../index.html"
import "../scss/main.scss";

//plugins

import Validate from "./plugins/validateform";
import "./plugins/telmask";
// import "../scss/_base.scss"

//для заглушки

const step1 = document.querySelector('[data-step-1]')
const step2 =document.querySelector('[data-step-2]')
const step3 =document.querySelector('[data-step-3]')
const buttonStart = document.querySelector('[data-to_form]')
const buttonClose = document.querySelector('[data-close]')
const buttonCloseAnswer = document.querySelector('[data-close-answer]')

const removeClasses =  (el,prefix)=>{

    const classes = el.className.split(" ").filter(function(c) {
    return c.lastIndexOf(prefix, 0) !== 0;
});
console.log(classes)
el.className = classes.join(" ").trim();
}
const step1Somthing = ()=>{
  step2.removeEventListener('animationend', step2Somthing);
    step3.removeEventListener('animationend', step4Somthing);
    removeClasses(step1, 'animate__')
    removeClasses(step2, 'animate__')
    step1.style.setProperty('display', 'none')
    step2.style.setProperty('display', 'block')
    step2.classList.add('animate__animated', 'animate__bounceInDown');
    
  }
  
  const step2Somthing = ()=>{
    step2.style.setProperty('display', 'none')
    step1.classList.remove('animate__animated','animate__fadeOutDown');
    step1.style.setProperty('display', 'flex  ')
    step1.classList.add('animate__animated','animate__fadeInUp');
  }
  const step3Somthing = ()=>{
    step2.removeEventListener('animationend', step2Somthing);
    removeClasses(step2, 'animate__')
    step2.style.setProperty('display', 'none')
    step3.style.setProperty('display', 'block  ')
    step3.classList.add('animate__animated','animate__fadeInUp');
  }
  
  const step4Somthing = ()=>{
    step2.removeEventListener('animationend', step2Somthing);
    step3.style.setProperty('display', 'none')
    step1.classList.remove('animate__animated','animate__fadeOutDown');
    step1.style.setProperty('display', 'flex  ')
    step1.classList.add('animate__animated','animate__fadeInUp');
  }
buttonStart.onclick = ()=>{
    step1.classList.add('animate__animated', 'animate__fadeOutDown');
    step1.addEventListener('animationend', step1Somthing);
}


buttonClose.onclick = ()=> {
    step1.removeEventListener('animationend', step1Somthing);
    // step2.classList.remove('animate__animated','animate__bounceInDown');
    step2.classList.add('animate__animated', 'animate__bounceOutUp');
    step2.addEventListener('animationend', step2Somthing)
}


buttonCloseAnswer.onclick = () =>{
  step1.removeEventListener('animationend', step1Somthing);
  step2.removeEventListener('animationend', step3Somthing)
  step2.classList.remove('animate__animated', 'animate__bounceOutUp');
  removeClasses(step3, 'animate__')
  step3.classList.add('animate__animated', 'animate__bounceOutUp');
  step3.addEventListener('animationend', step4Somthing)
}


const form = document.querySelector("[data-form]")
form.addEventListener("submit", async function(event){
    event.preventDefault();
    const valid = new Validate(form).valid
    if(valid){
      formReq(form)
      step2.removeEventListener('animationend', step2Somthing);
      step2.classList.add('animate__animated', 'animate__bounceOutUp');
      step2.addEventListener('animationend', step3Somthing)
    }
    
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

