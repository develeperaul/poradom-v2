import "../../pages/card-about.pug";

document.addEventListener("DOMContentLoaded", () => {
  let selected = 'what'

  const buttons = document.querySelectorAll('[data-select]')
  buttons.forEach(button=>{
    button.addEventListener('click',function(){
      const data = button.getAttribute('data-select')
      selected=data
      setSelected(buttons,selected)
    })
  })
})

const setSelected = function(elements, choice){
  const sliders =  document.querySelectorAll('.home-card-about-slider')
  sliders.forEach(slider=>{
    const sliderId =slider.getAttribute('id')
    if(sliderId === choice){
      slider.parentNode.style.display = 'block'
    }else {
      slider.parentNode.style.display = 'none'
    }
  })
  elements.forEach(el=>{
    if(el.getAttribute('data-select') === choice){
      if(el.classList.contains('button_none-bg'))
        el.classList.remove('button_none-bg')

      el.classList.add('button__blue')
    } else {
      if(el.classList.contains('button__blue'))
        el.classList.remove('button__blue')

      el.classList.add('button_none-bg')
    }
  })
}