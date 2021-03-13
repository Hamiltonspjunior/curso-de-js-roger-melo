// Método sort

// Exemplo 1: Ordenando strings
const names = ['Christian', 'Alfredo', 'Edson']

names.sort()

console.log(names)


// Exemplo 2: Ordenando números
const scores = [10, 50, 20, 5, 35, 70, 45]

// scores.sort()

// console.log(scores) // [ 10, 20, 35, 45, 5, 50, 70 ]


scores.sort((score1, score2) => score1 - score2)

console.log(scores)

// Exemplo 1: Ordenando objetos
const theBigFamily = [
  { name: 'Lineu', score: 20 },
  { name: 'Nenê', score: 10 },
  { name: 'Tuco', score: 50 },
  { name: 'Bebel', score: 30 },
  { name: 'Agostinho', score: 70 }
]

// theBigFamily.sort((item1, item2) => {
//   if (item1.score > item2.score) {
//     return -1
//   } else if (item2.score > item1.score) {
//     return 1
//   }

//   return 0
// })

// console.log(theBigFamily)

theBigFamily.sort((item1, item2) => item2.score - item1.score)

console.log(theBigFamily)




// Encadeamento de métodos
const books = [
  { name: 'Código Limpo', price: 30 },
  { name: 'O milagre da manhã', price: 5 },
  { name: 'Alice no País das Maravilhas', price: 10 },
  { name: 'Quem Pensa Enriquece', price: 50 },
  { name: 'O livro da ciência', price: 40 }
]

const booksOnSale = books
  .filter(({ price }) => price > 20)
  .map(({ name, price }) => `O preço do livro "${name}" caiu para ${price} reais`)

console.log(booksOnSale)




/* RESUMO
  - O método sort ordena os valores de um array, podendo esses valores serem strings, números ou objetos
  - Por padrão o método sort ordena strings em ordem alfabética
  - O método sort altera o array original
  - O método sort pode receber um parametro opcional que é uma função de comparação
  - Essa função de comparação deve determinar qual item deve vir antes do outro
  - A função recebe dois argumentos que representam 2 valores quaisquer do array
  - Se o primeiro argumento deve vir primeiro, a função deve retorna um número negativo
  - Se o segundo argumento deve vir primeiro a função deve retornar um número positivo
  - Se os números são iguais e não precisam ser reoordenados a função deve retornar 0
  - Métodos podem ser encadeados uns nos outros, por exemplo: Encadear um map após a execução de um filter
  - Só é possível encadear métodos se o valor retornado pelo primeiro esteja de acordo com o que o segundo método trabalha
*/