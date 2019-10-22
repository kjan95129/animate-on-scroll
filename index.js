const FADE_UP = 'fade-up'
const FADE_DOWN = 'fade-down'
const FADE_LEFT = 'fade-left'
const FADE_RIGHT = 'fade-right'
const FADE_UP_LEFT = 'fade-up-left'
const FADE_UP_RIGHT = 'fade-up-right'
const FADE_DOWN_LEFT = 'fade-down-left'
const FADE_DOWN_RIGHT = 'fade-down-right'


let windowHeight = window.innerHeight
let fadeUp = document.querySelectorAll('[animation="fade-up"]')
let fadeDown = document.querySelectorAll('[animation="fade-down"]')
let fadeLeft = document.querySelectorAll('[animation="fade-left"]')
let fadeRight = document.querySelectorAll('[animation="fade-right"]')
let fadeUpLeft = document.querySelectorAll('[animation="fade-up-left"]')
let fadeUpRight = document.querySelectorAll('[animation="fade-up-right"]')
let fadeDownLeft = document.querySelectorAll('[animation="fade-down-left"]')
let fadeDownRight = document.querySelectorAll('[animation="fade-down-right"]')

const addAnimation = (node, animation) => {
  let nodePosition = node.offsetTop + node.offsetHeight

  if (window.pageYOffset + windowHeight < nodePosition) {
    node.classList.remove(animation)
    node.classList.add(`${animation}-opposite`)
  } else if (window.pageYOffset + windowHeight >= nodePosition) {
    node.classList.add(animation)
    node.classList.remove(`${animation}-opposite`)
  }
}

document.addEventListener('scroll', () => {
  fadeUp.forEach(node => {
    addAnimation(node, FADE_UP)
  })

  fadeDown.forEach(node => {
    addAnimation(node, FADE_DOWN)
  })

  fadeLeft.forEach(node => {
    addAnimation(node, FADE_LEFT)
  })

  fadeRight.forEach(node => {
    addAnimation(node, FADE_RIGHT)
  })

  fadeUpLeft.forEach(node => {
    addAnimation(node, FADE_UP_LEFT)
  })

  fadeUpRight.forEach(node => {
    addAnimation(node, FADE_UP_RIGHT)
  })

  fadeDownLeft.forEach(node => {
    addAnimation(node, FADE_DOWN_LEFT)
  })

  fadeDownRight.forEach(node => {
    addAnimation(node, FADE_DOWN_RIGHT)
  })
})

// let slider = document.querySelector('#myRange')
// slider.addEventListener('input', () => {
//   let sliderValue = slider.value
//   let earthquake = document.querySelector('#earthquake')
//   let boxText = document.querySelector('#boxText')
//   if(sliderValue < 5) boxText.innerHTML = 'ah'
//   else if(sliderValue < 10) boxText.innerHTML = 'ahhhhhhhhhhhh'
//   else if(sliderValue < 15) boxText.innerHTML = 'ahhhhhhhhhhhhhhhhhhhhhhhhhhhhh'
//   else boxText.innerHTML = 'AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'


//   earthquake.innerHTML = `@keyframes earthquake {
//     10% {
//       transform: rotate(${sliderValue}deg) translateX(${sliderValue*2}px);
//     }
//     30% {
//       transform: rotate(-${sliderValue}deg) translateX(-${sliderValue*2}px);
//     }
//     45% {
//       transform: rotate(${sliderValue}deg) translate(${sliderValue*2}px, -${sliderValue/4}px);
//     }
//     60% {
//       transform: rotate(${sliderValue}deg) translate(-${sliderValue*2}px, ${sliderValue/4}px);
//     }
//     80% {
//       transform: rotate(-${sliderValue}deg) translate(${sliderValue*2}px, -${sliderValue/4}px);
//     }
//     100% {
//       transform: rotate(${sliderValue}deg) translate(-${sliderValue*2}px, ${sliderValue/4}px);
//     }
//   }`
// })