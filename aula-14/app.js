// Adicionando e modificando conteúdo em uma página
// const paragraph = document.querySelector('p')

// paragraph.innerText += ' Texto inserido'


// const paragraphs = document.querySelectorAll('p')

// paragraphs.forEach((paragraph, index) => {
//    paragraph.innerText += ` | Novo texto ${index + 1}`
// })


// const div = document.querySelector('.content')

// div.innerHTML += '<h2>Novo h2</h2>'


// const people = ['Jonatan', 'Vinicius', 'Diego']

// people.forEach(person => {
//    div.innerHTML += `<p>${person}</p>`
// })


// Obetendo e setando atributos
// const link = document.querySelector('a')

// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'https://rogermelo.com.br')

// link.innerText = 'Website do Roger Melo'

// const error = document.querySelector('p.error')

// console.log(error.getAttribute('class'))

// error.setAttribute('class', 'sucess')

// error.setAttribute('style', 'color: green')


// Adcionando, modificando e removendo estilos
// console.log(error.style)

// error.style.color = 'blue'
// error.style.margin = '50px'
// error.style.color = ''




// Obtendo, adicionando, removendo e alternando classes CSS
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(paragraph => {
   const isErrorWordIncluded = paragraph.textContent.includes('error')
   const isSucessWordIncluded = paragraph.textContent.includes('sucess')

   if (isErrorWordIncluded) {
      paragraph.classList.add('error')
   }

   if (isSucessWordIncluded) {
      paragraph.classList.add('sucess')
   }
})





/*
   RESUMO/ANOTAÇÕES:
      - É possível modificar ou adcionar conteúdo em algum elemento html utilizando as propriedades innerText e innerHTML.
      - Essas duas propriedades funcionam como getters e setters
      - Também é possível obter e setar atributos de um elemento
*/