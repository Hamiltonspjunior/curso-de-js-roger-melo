// Funções de callback e JSON
const getTodos = (url, callback) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      callback(null, data)
      return
    }
  
    if (isRequestNotOk) {
      callback('Não foi possível obter os dados da API', null)
    }
  })
  
  request.open('GET', url)
  request.send()
}

getTodos('./todos.json', (error, data) => {
  // console.log('Callback executado')
  // if (error) {
  //   console.log(error)
  //   return
  // }


  // Exemplo de callback hell
  console.log(data)
  getTodos('./todos-02.json', (error, data) => {
    console.log(data)
    getTodos('./todos-03.json', (error, data) => {
      console.log(data)
    })
  })
})



/* RESUMO:
  - callbacks são utilizados para executar ações distintas dependendo de uma condição
  - callbacks permitem criar códigos mais reutilizaveis
  - Quando utilizamos um callback em uma operação assíncrona esse callback é passado para outra região do browser onde é tratado por uma thread separada
  - JSON é um acrônimo para JavaScript Objetc Notation e é um formato para troca de informações que a maioria das APIs, retorna quando um request é feito
  - De forma prática, o JSON nada mais é do que uma string que se parece muito com um objeto javascript
  - O Javascript possui um objeto JSON embutido que contém vários métodos para se trabalhar com json
  - o método parse do objeto JSON é responsável por converter um valor no formato json para um objeto javascript real
  - Quando precisamos fazer diversas requisições e utilizamos callback é comum que criemos um problema chamado: "callback Hell"
  - callback hell é uma má prática de codificação quando começamos a utilizar diversos callbacks, um dentro do outro tornando o nosso código ilegível
*/