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

// Loop through animationList, store all DOM nodes with data-animation
animationList.map(animation => {
  animationNodes[animation] = document.querySelectorAll(`[data-animation="${animation}"]`)
})

/**
 * Get a DOM node's current position and add/remove the 
 * animation class based on scroll position
 * 
 * @param {DOMNode} node 
 * @param {string} animation 
 */
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

/**
 * Main logic to loop through all DOM nodes and
 * adds the animation class to each one.
 */
const addAnimationsToNodes = () => {
  Object.keys(animationNodes).map(key => {
    nodes = animationNodes[key]
    nodes.forEach(node => {
      addAnimation(node, key)
    })
  })
}

// Create animations on load
window.onload = () => {
  addAnimationsToNodes()
}

// Create animations while listening to scroll
document.addEventListener('scroll', () => {
  addAnimationsToNodes()
})

