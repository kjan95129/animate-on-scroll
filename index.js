const FADE_UP = 'fade-up'
const FADE_DOWN = 'fade-down'
const FADE_LEFT = 'fade-left'
const FADE_RIGHT = 'fade-right'
const FADE_UP_LEFT = 'fade-up-left'
const FADE_UP_RIGHT = 'fade-up-right'
const FADE_DOWN_LEFT = 'fade-down-left'
const FADE_DOWN_RIGHT = 'fade-down-right'

const animationList = [
  FADE_UP,
  FADE_DOWN,
  FADE_LEFT,
  FADE_RIGHT,
  FADE_UP_LEFT,
  FADE_UP_RIGHT,
  FADE_DOWN_LEFT,
  FADE_DOWN_RIGHT,
]
const windowHeight = window.innerHeight
let animationNodes = {}
animationList.map(animation => {
  animationNodes[animation] = document.querySelectorAll(`[data-animation="${animation}"]`)
})

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
  Object.keys(animationNodes).map(key => {
    nodes = animationNodes[key]
    nodes.forEach(node => {
      addAnimation(node, key)
    })
  })
})