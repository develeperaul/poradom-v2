// const inputs=document.querySelectorAll("[data-range]");
const parents = document.querySelectorAll("[data-inputs-range]")
for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => {e.style.setProperty('--value', e.value);console.log('range')});
}

parents.forEach(parent=>{
  const inputs = Array.from(document.querySelectorAll("[data-range]"));
  inputs.forEach(input=>{
    input.addEventListener('input',(e)=>{
      const inputPrev = inputs.find(el=>el !== input)
    
      console.log( e.target);
      if(input.getAttribute("type") === 'range'){
        inputPrev.value = input.value
        inputPrev.blur()
        let event = new Event('input', {
            'bubbles': true,
            'cancelable': true
        })
        setTimeout(()=>{
          inputPrev.dispatchEvent(event)
        },0)
      } else if(input === document.activeElement) {
        inputPrev.value = input.value;
        console.log('hi')
        let event = new Event('input', {
            'bubbles': true,
            'cancelable': true
        })
        setTimeout(()=>{
          inputPrev.dispatchEvent(event)
        },0)
      }
    })
  })
})

  // inputs.forEach(input=>{
  //   input.addEventListener('input',()=>{
      
  //     if(input.getAttribute('type') === 'range')console.log('hi')
  //     // inputs.forEach(el=>{
  //     //   if(el!==input){
  //     //     el.value = input.value;
  //     //     let event = new Event('input', {
  //     //       'bubbles': true,
  //     //       'cancelable': true
  //     //   })
  //     //   console.log(input === document.activeElement);
  //     //   console.log(el)
  //     //   setTimeout(()=>{
  //     //     // el.dispatchEvent(event)

  //     //   },100)
  //     //   } 
  //     //   if(el.getAttribute('type') === 'range') {
  //     //     el.style.setProperty('--value', el.value);
  //     //     el.style.setProperty('--min', el.min == '' ? '0' : el.min);
  //     //     el.style.setProperty('--max', el.max == '' ? '100' : el.max);
  //     //     el.addEventListener('input', () => {el.style.setProperty('--value', el.value);console.log('hoi')});
  //     //   }
  //     // })
  //   })
  // })