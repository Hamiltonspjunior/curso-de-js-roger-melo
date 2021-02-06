// DOM
// console.log(document)



// Query Selector 
const h1 = document.querySelector('body > h1')

console.log(h1)


// Query selector all
const paragraphs = document.querySelectorAll('p')
const errors = document.querySelectorAll('.error')

paragraphs.forEach(paragraph => {
   console.log(paragraph)
})

console.log(paragraphs)
console.log(errors)


/*
   RESUMO/ANOTAÇÕES:
      - O DOM é criado pelo browser
      - Quando a página é carregada o browser fornece um objeto chamado document que representa a estrutura da página
      - Através do document podemos acessar métodos e propriedades que nos possibilita interagir com os elementos da página
*/