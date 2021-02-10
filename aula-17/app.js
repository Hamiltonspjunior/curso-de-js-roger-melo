// O evento submit
const form = document.querySelector('.signup-form')
// const userNameInput = document.querySelector('#username')

form.addEventListener('submit', event => {
   event.preventDefault()

   console.log(form.username.value)
})


// Expressões regulares
// (/^[a-zA-Z0-9]{6,10}$/) // Exemplo de regex

const username = 'rogerm123'
const patern = /^[a-z]{6,}$/
// const isAMatch = patern.test(username)

// if (isAMatch) {
//    console.log('O teste da regex passou =)')
// } else {
//    console.log('O teste da regex não passou =(')
// }

const result = username.search(patern)


/*
   RESUMO/ANOTAÇÕES:
      - É possível monitorar o evento de envio de um formulário através do evento submit
      - É possível impedir que a página recarregue quando um formulário é enviado
      - É possível obter a referência dos inputs de um formulário através dos atributos name, id ou através da propriedade target do objeto event
      - Regex são usadas para encontrar padrões em uma cadeia de caracteres(Strings)
      - O método test tenta dar match entre uma regex e uma string passada por parametro e retorna um boolean como resultado
      - O search é um método de string que recebe como argumento uma regex para ser testada e tentar dar Match. Retorna o index de onde o match aconteceu ou -1 se não der match
*/