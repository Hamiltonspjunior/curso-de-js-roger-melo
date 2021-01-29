// Booleans e comparações
// console.log(true, false, 'true', 'false')

// Métodos podem retornar booleans
const email = 'brucewayne@rogermelo.com.br'
const includes = email.includes('@')
const names = ['dio', 'roger', 'robert']
const arrayIncludes = names.includes('roger') // Verifica se o argumento passado existe dentro de uma string ou um array

// console.log(includes)
// console.log(arrayIncludes)

// Operadores de comparação
const age = 31
const name = 'roger'

// console.log(age == 31)
// console.log(age == 35)
// console.log(age != 31)
// console.log(age > 31)
// console.log(age < 32)
// console.log(age <= 31)
// console.log(age >= 31)

console.log(name == 'roger')
console.log(name == 'Roger')
console.log(name > 'belinha')
console.log(name > 'Roger')
console.log(name > 'Belinha')


// 'Igual a e do mesmo tipo' e 'diferente de, e do mesmo tipo'

console.log(age === 31)
console.log(age === '31')

console.log(age !== 31)
console.log(age !== '31')

// Conversão de tipos
let score = '100'

score = Number(score)

console.log(score + 1)
console.log(typeof score)

const crazyConvertion = Number('maçã')
const convertedNumber = String(97)
const booleanConvertion = Boolean(10)

console.log(crazyConvertion)
console.log(convertedNumber, typeof convertedNumber)
console.log(booleanConvertion, typeof booleanConvertion)

/*
   Valores falsy: 
      - false
      - 0 
      - "", '', ``
      - null
      - undefined
      - NaN

   Valores truthy:
      - Qualquer valor que não é falsy

*/

/*
   RESUMO: 
      - Booleans são representados por apenas dois valores: true e false
      - Booleans são usados para fazer comparações em trechos de códigos
      - Existem diversos métodos que podem retornar um boolean
      - Existem operadores de comparação para verificar se valor são iguais, diferentes, maiores, menores, maiores ou iguais e menores ou iguais
      - É possível fazer comparações com strings
      - JS é Case Sensitive, isso significa que diferencia maiúsculas de minúsculas. roger é diferente de Roger
      - Para comparar duas strings o javascript considera uma precedência de acordo com a ordem do alfabeto, então r é maior que b. 
      - As letras minúsculas são consideradas maiores que as maiúsculas
      - Deve-se sempre tentar usar os operadores de igualdade estrita para fazer comparações
      - É possível fazer conversões de tipo utilizando funções construtoras como Number(), String() e Boolean()
      - O operador typeof mostra qual o tipo de um valor
*/