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
