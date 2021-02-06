// Variáveis e escopo de bloco

const age = 31

if (true) {
   const age = 41
   const name = 'Roger'

   console.log(`Dentro do 1º bloco de código: ${age} ${name}`)

   if (true) {
      const age = 51
      console.log(`Dentro do 2º bloco de código: ${age}`)

      var test = 'oi'
   }
}

console.log(`Fora do bloco de código: ${age} ${name} ${test}`)


// A palavra-chave this
let user = {
   name: 'João',
   age: 31,
   email: 'joaocardoso@gmail.com',
   city: 'São Paulo',
   blogPosts: ['Empadão de frango', '4 Receitas de purê de batata'],
   login () {
      console.log('Usuário logado')
   },
   logout () {
      console.log('Usuário deslogado')
   },
   logBlogPosts () {
      console.log(this)

      console.log(`${this.name} escreveu esses posts:`)

      this.blogPosts.forEach(post => {
         console.log(post)
      })
   }
}

user.logBlogPosts()

console.log(this)


/*
   RESUMO/ANOTAÇÕES:
      - O escopo define a área onde uma variável está disponível ou não
      - Variáveis definidas na raiz do documento estão no escopo global, disponível em todo códgio
      - let e const definem escopo de bloco onde foram criadas
      - a palavra var ignora o escopo de bloco
      - Váriaveis declaradas em escopos diferentes podem receber o mesmo nome, pois são tratadas como entidades separadas
      - O this é um objeto de contexto. Ele representa o contexto no qual o código atual está sendo executado
      - O valor do this depende de onde ele foi chamado ou como
      - Na raiz do documento o this referencia o objeto global. Para o navegador o objeto global é o window object
      - Quando o this é usado dentro de um método de um objeto ele vai referênciar o próprio objeto. Isso se o método for definido com function declaration
      - Se o método for uma arrow function o valor do this será o mesmo de onde o método foi invocado. Se for a raiz do documento será o objeto global

*/