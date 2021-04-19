// Fetch API e Async/await
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => {
//     console.log('response', response)
//     return response.json()
//   })
//   .then(users => console.log(users))
//   .catch(error => console.log(error))


// Exemplo de asyn/await
const getUsers = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  console.log(users)
}

const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}

console.log(1)
console.log(2)

logUsers()

console.log(3)
console.log(4)



  /* RESUMO:
  - A Fetch API é uma interface nativa do Js para se fazer requests http de uma forma mais moderna
  - A Fetch API trabalha utilizando promises
  - O método fetch() recebe como argumento uma string contendo o endpoint para onde o request deve ser feito
  - A Fetch API só rejeita a promise quando ocorre um erro na rede, falta de conexão por exemplo
  - Quando o endpoint é inválido, por exemplo, o código do then() é executado da mesma forma, porém recebemos um status 404(Não encontrado)
  - Quando a promise retornada pelo fetch() tem sucesso ela retorna um objeto response com dados da requisição, como o status e o body(dados)
  - O objeto response possui um método json(), que retorna uma nova promise com os dados obtidos no formato JSON
  - o método fetch também pode receber um segundo argumento, o objeto de configuração para o request
  - Async/wait é um syntax sugar, uma abstração, de promises. 
  - Utilizar async/await elemina o encadeamento de promises deixando o código ainda mais legível.
  - Utilizar asyn/awai permite executar código assíncrono com se fosse sincrono
  - Para utilizarmos async/await primeiro usamos a palavra-chave async junto da declaração de uma função para explicitarmos que essa será uma função assíncrona e não deve ser um código bloqueante
  - Uma função declarada com async sempre irá retornar uma promise, independente do código dentro dela
  - Dentro da função assíncrona usamos a palavra await antes de uma promise.
  - O await irá fazer o código aguardar até que essa promise seja resolvida e todo código após ele é ignorado.
  - Após a promise ser resolvida, por baixo dos panos, o await desencapsula a resposta da promise e a retorna, podendo ser armazenada em uma variável por exemplo
  - 
*/