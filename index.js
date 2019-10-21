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
  earthquake.innerHTML = `@keyframes earthquake {
    0% {
      transform: translateX(${sliderValue}px)
    }
    100% {
      transform: translateX(-${sliderValue}px)
    }
  }`
})

let box2 = document.querySelector('#box2')