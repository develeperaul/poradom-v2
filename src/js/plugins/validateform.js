export default class Validate {
  constructor(form) {
    this.form = form;
    this.validate = [];
    const fields = form.querySelectorAll('[data-special-offer]');
// console.log(fields);
    fields.forEach((field,index) => {
      const type =field.getAttribute('data-type');
      // console.log(field+ ";" +index)
      this.validating(field,type)
    });
    
    
      // const forms = document.querySelectorAll("form");
      // this.validate = null;
      // forms.forEach((form) => {
      //   form.addEventListener("submit", (event) => {
      //     console.log("validate");
      //     const fields = form.querySelectorAll("[data-special-offer]");
      //     event.preventDefault();
      //     console.log(this);
      //     for (var i = 0; i < fields.length; i++) {
      //       fields[i].classList.remove("text-field__input_invalid");
      //       fields[i].classList.remove("checkbox_invalid");
      //       if (fields[i].type == "checkbox" && !fields[i].checked) {
      //         fields[i].classList.add("checkbox_invalid");
      //         this.validate = null
      //       }else {
      //         this.validate = form;

      //       }

      //       if (
      //         fields[i].type !== "checkbox" &&
      //         fields[i].classList.contains("tel") &&
      //         (!fields[i].value || fields[i].value.length < 17)
      //       ) {
      //         {
      //           fields[i].classList.add("text-field__input_invalid");
      //           this.validate = null
      //         }
      //       } else {
      //         this.validate = form;

      //       }
      //       if (fields[i].type !== "checkbox" && !fields[i].value) {
      //         fields[i].classList.add("text-field__input_invalid");
      //         this.validate = null
      //       }else {
              
      //         this.validate = form;
      //       }
      //     }
      //   });
      // });
  }
  validating (input, type){
    // input
    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    switch (type){
      case 'phone': 
      this.inputIsvalid(input, input.value.length == 17)
      break
      case 'email':
      this.inputIsvalid(input, EMAIL_REGEXP.test(input.value))
      break
      case 'checkbox':
      this.inputIsvalid(input, input.checked);
      break
      default :
          this.inputIsvalid(input, input.value.length > 3);
      }
    }
  inputIsvalid(input,condition){
    const invalid = "text-field__input_invalid"
    if(condition){
      this.validate.push(true)
      input.classList.remove(invalid)
    } else {
      this.validate.push(false)
      input.classList.add(invalid)
    }
  }
  get validate() {
    return this._validate;
  }
  set validate(el) {
    this._validate = el;
  }

  get valid() {
    console.log(this._validate);
    return !this._validate.includes(false)
  }
  success() {
    this.validate = null;
  }
}
// console.log();
// export const validate = new Validate();
