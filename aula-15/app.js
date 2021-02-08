// Parents, children e siblings

// const article = document.querySelector('article')

// Array.from(article.children).forEach(element => {
//    element.classList.add('article-element')
// })

// const title = document.querySelector('h2')

// console.log(title.parentElement.parentElement)

// console.log(title.nextElementSibling)

// console.log(title.previousElementSibling)


// Eventos de clique
const ul = document.querySelector('ul')
const lis = document.querySelectorAll('li')

lis.forEach(li => {
   li.addEventListener('click', event => {
      const clickedElement = event.target

      clickedElement.remove()
   })
})

const button = document.querySelector('button')

button.addEventListener('click', () => {
   const li = document.createElement('li')

   li.textContent = 'Novo item'

   ul.prepend(li) // Adciona um elemento como primeiro filho de um outro elemento
})