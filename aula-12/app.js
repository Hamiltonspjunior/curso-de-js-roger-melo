// Objetos em Array

let user = {
   name: 'João',
   age: 31,
   email: 'joaocardoso@gmail.com',
   city: 'São Paulo',
   blogPosts: [
      {title: 'Empadão de frango', likes: 30},
      {title: '4 Receitas de purê de batata', likes: 50}
   ],
   login () {
      console.log('Usuário logado')
   },
   logout () {
      console.log('Usuário deslogado')
   },
   logBlogPosts () {
      console.log(`${this.name} escreveu esses posts:`)

      this.blogPosts.forEach(post => {
         console.log(post.title, post.likes)
      })
   }
}

user.logBlogPosts()



// O objeto Math
console.log(Math)
console.log(Math.PI)
console.log(Math.E)

const area = 7.5

console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))


// Números aleatórios
const randomNumber = Math.random()

console.log(randomNumber)

console.log(Math.round(randomNumber * 100))



// Valores primitivos
let scoreOne = 100
let scoreTwo = scoreOne

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)

scoreOne = 50

console.log(`scoreOne: ${scoreOne} | scoreTwo: ${scoreTwo}`)


// Valores de referência
let userOne = { name: 'Roger', age: 31 }
let userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 32

console.log(userOne, userTwo)

userTwo.age = 33

console.log(userOne, userTwo)


/*
   RESUMO/ANOTAÇÕES:
      - Arrays também podem recer objetos como itens
      - É possível iterar por um array de objetos e acessar cada propriedade desse objeto
      - JS possue diversos obejets embutidos, entre eles o Math, que fornece uma série de propriedades e métodos para realizar operações matemáticas
      - Valores primitivos e valores de referência são armazenados em lugares diferentes na memória
      - Valores primitivos são armazenados na stack, onde o valor é armazenado e pode ser acessado por um identificador(variável)
      - Valores de referência são armazenados no heap, porém quando isso é feito o identificador desse valor é criado na stack e armazena um ponteiro para o valor que está no heap. Dessa forma o valor só é criado apenas uma vez
      - Quando copiamos um valor de referência para outro, aquele valor não é duplicado. Ele continua sendo armazenado apenas uma vez no heap. Porém o ponteiro que aponta para ele é duplicado na stack, portanto os dois identificadores armazenam um ponteiro para o mesmo valor.
      - Por isso, ao alterar um valor de referência a sua cópia também reflete as alterações
      - Isso não acontece com valores primitivos, pois quando um valor é duplicado ele realmente é duplicado na stack. 
      - stack é menor que o heap, porém mais rápida

*/