// Método MAP
const numbers = [1, 2, 3]

const doubleNumbers = numbers.map(item => item * 2)

console.log(numbers, doubleNumbers)


const products = [
  { name: 'Mouse Sem Fio', price: 30 },
  { name: 'Pen Drive', price: 25 },
  { name: 'Cartucho de Tinta', price: 50 },
  { name: 'Suporte Ergonômico para Notebook', price: 23 },
  { name: 'Repetidor de Sinal Wi-Fi', price: 44 }
]

const saleProducts = products.map(product => {
  if (product.price >= 30) {
    return { name: product.name, price: product.price / 2 }
  }

  return product
})

console.log(products, saleProducts)



// Método Filter
const randomNumbers = [36, 77, 37, 63, 99]

const numbersGreaterThan37 = randomNumbers.filter(item => item > 37)

console.log(numbersGreaterThan37)

const users = [
  { name: 'Ada Lovelace', premium: true },
  { name: 'Grace Hopper', premium: false },
  { name: 'Alan Turing', premium: true },
  { name: 'Linus Torvalds', premium: false },
  { name: 'Margaret Hamilton', premium: true }
]

const premiumUsers = users.filter(user => user.premium)

console.log(users, premiumUsers)



// Método Reduce

const numbersToSum = [1, 2, 3]

const numbersSum = numbersToSum.reduce((accumulator, item) => accumulator + item, 0)

console.log(numbersSum)

const phaseScores = [
  { name: 'Vinicius Costa', score: 337 },
  { name: 'Roger Melo', score: 43 },
  { name: 'Alfredo Braga', score: 234 },
  { name: 'Pedro H. Silva', score: 261 },
  { name: 'Ana Paula Rocha', score: 491 },
  { name: 'Vinicius Costa', score: 167 },
  { name: 'Roger Melo', score: 137 },
  { name: 'Alfredo Braga', score: 135 },
  { name: 'Ana Paula Rocha', score: 359 },
  { name: 'Pedro H. Silva', score: 133 }
]

const rogerScore = phaseScores.reduce((accumulator, phaseScore) => {
  if (phaseScore.name === 'Roger Melo') {
    accumulator += phaseScore.score
  }

  return accumulator
}, 0)

console.log(rogerScore)

/* RESUMO 
- O método map itera por todos os itens de um array e retorna um novo com todos os itens modificados
- O método map sempre deve retornar um valor, esse valor será um item no novo array gerado
- O método map não altera o array original
- O método map recebe três parametros: o item atual, o index do item atual, e o próprio array pelo qual itera
- O método filter itera por todos os itens de um array e retorna um novo apenas com os itens que atendem a condição que uma função de callback passada por parametro retorna
- O filter não altera o array original
- A função de callback deve sempre retornar um boolean, através de uma condição usada testar cada um dos itens do array
- O método reduce itera por todos os itens de um array e retorna um único valor baseado em todos os outros item, ou seja, ele reduz o array iterado em um único item
- O reduce recebe uma função como argumento que é executada para cada item do array
- A função de callback recebe 4 valores: o accumulator, o item atual, o index e o próprio array
*/