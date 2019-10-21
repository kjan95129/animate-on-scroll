let windowHeight = window.innerHeight

document.addEventListener('scroll', () => {
  let box = document.querySelector('#box1')
  let boxPosition = box.getBoundingClientRect().top

  console.log('Distance from top is:', boxPosition, 'Window height is: ', windowHeight)

  boxPosition <= windowHeight - 100 && box.classList.add('fade')
  boxPosition > windowHeight && box.classList.remove('fade')
})
