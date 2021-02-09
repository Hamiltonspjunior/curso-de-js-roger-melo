// Event bubbling e event delegation

// const ul = document.querySelector('ul')
// const lis = document.querySelectorAll('li')

// const button = document.querySelector('button')

// button.addEventListener('click', () => {
//    const li = document.createElement('li')

//    li.textContent = 'Novo item'

//    ul.prepend(li) // Adciona um elemento como primeiro filho de um outro elemento
// })

// ul.addEventListener('click', event => {
//    const clickedElement = event.target

//    if (clickedElement.tagName === 'LI') {
//       clickedElement.remove()
//    }
// })


// Mais eventos do Dom
const paragraph = document.querySelector('.copy-me')

paragraph.addEventListener('copy', () => {
   console.log('Texto copiado!')
})

const div = document.querySelector('.box')

div.addEventListener('mousemove', event => {
   div.textContent = `X: ${event.offsetX} | Y: ${event.offsetY}`
})


document.addEventListener('wheel', event => {
   console.log(event.pageX, event.pageY)
})





/*
   RESUMO/ANOTAÇÕES
      - JS possue Event Propagation. Isso significa que quando um evento é disparado ele é propagado do target do evento até os pais do elemento que recebeu o evento. 
      - Ao propagar o evento para os pais o Javascript identifica se esses pais tem algum evento atrelado, se houver o evento é disparado. 
      - É possível evitar o Event propagation com o método stopPropagation()
      - Quando adcionamos um evento em um elemento pai, esse evento também é aplicado aos filhos, por fazerem parte do pai. Esse comportamento é conhecido como Event Delegation
*/