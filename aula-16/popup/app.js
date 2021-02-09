const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', () => {
   popup.classList.add('active')
})

popup.addEventListener('click', event => {
   const clickedElement = event.target.classList[0]
   const classesNames = ['popup-close', 'popup-link', 'popup-wrapper']
   const shouldClosePopup = classesNames.includes(clickedElement)

   if (shouldClosePopup) {
      popup.classList.remove('active')
   }
})