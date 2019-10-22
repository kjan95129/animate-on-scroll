let windowHeight = window.innerHeight
let box = document.querySelector('#box1')
let boxPosition = box.offsetTop + box.offsetHeight
let animation = 'fade-up'

document.addEventListener('scroll', () => {
  if (window.pageYOffset + windowHeight < boxPosition) {
    box.classList.remove(animation)
    box.classList.add(`${animation}-opposite`)
  } else if (window.pageYOffset + windowHeight >= boxPosition) {
    box.classList.add(animation)
    box.classList.remove(`${animation}-opposite`)
  }
})

let slider = document.querySelector('#myRange')
slider.addEventListener('input', () => {
  let sliderValue = slider.value
  let earthquake = document.querySelector('#earthquake')
  let boxText = document.querySelector('#boxText')
  if(sliderValue < 5) boxText.innerHTML = 'ah'
  else if(sliderValue < 10) boxText.innerHTML = 'ahhhhhhhhhhhh'
  else if(sliderValue < 15) boxText.innerHTML = 'ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
  else boxText.innerHTML = 'AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'


  earthquake.innerHTML = `@keyframes earthquake {
    10% {
      transform: rotate(${sliderValue}deg) translateX(${sliderValue*2}px);
    }
    30% {
      transform: rotate(-${sliderValue}deg) translateX(-${sliderValue*2}px);
    }
    45% {
      transform: rotate(${sliderValue}deg) translate(${sliderValue*2}px, -${sliderValue/4}px);
    }
    60% {
      transform: rotate(${sliderValue}deg) translate(-${sliderValue*2}px, ${sliderValue/4}px);
    }
    80% {
      transform: rotate(-${sliderValue}deg) translate(${sliderValue*2}px, -${sliderValue/4}px);
    }
    100% {
      transform: rotate(${sliderValue}deg) translate(-${sliderValue*2}px, ${sliderValue/4}px);
    }
  }`
})

let box2 = document.querySelector('#box2')