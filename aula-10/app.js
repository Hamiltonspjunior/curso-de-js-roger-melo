// Criando um objeto literal
let user = {
   name: 'João',
   age: 31,
   email: 'joaocardoso@gmail.com',
   city: 'São Paulo',
   blogPosts: ['Empadão de frango', '4 Receitas de purê de batata'],
   login: function () {
      console.log('Usuário logado')
   },
   logout: function () {
      console.log('Usuário deslogado')
   }
}

console.log(user.name)

user.age = 32

console.log(user.age)

const key = 'email'

console.log(user[key])

console.log(user['name'])

user['name'] = 'José'

console.log(user['name'])

console.log(typeof user)

user.login()
user.logout()


/*
   RESUMO/ANOTAÇÕES:
      - Objetos são representações de algo do mundo real, possuindo propriedades e métodos
      - Objetos são uma das partes mais importantes do JS
      - Praticamente tudo em JavaScript é um objeto
      - Podemos acessar as propriedades de um objeto usando a notação de ponto e de colchetes
      - Podemos reatribuir o valor de uma propriedade
      - Podemos usar uma string ou uma variável que contenha uma string para acessar uma propriedade
*/