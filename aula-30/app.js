// Promises
const getPokemon = (url) => new Promise((resolve, reject) => {
  const request = new XMLHttpRequest()

  request.addEventListener('readystatechange', () => {
    const isRequestOk = request.readyState === 4 && request.status === 200
    const isRequestNotOk = request.readyState === 4
  
    if (isRequestOk) {
      const data = JSON.parse(request.responseText)
      resolve(data)
      return
    }
  
    if (isRequestNotOk) {
      reject('Não foi possível obter os dados da API')
    }
  })
  
  request.open('GET', url)
  request.send()
})

// Exemplo de requests sequenciais usando promises
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(bulbasaur => {
    console.log(bulbasaur)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/4')
  })
  .then(charmander => {
    console.log(charmander)
    return getPokemon('https://pokeapi.co/api/v2/pokemon/7')
  })
  .then(console.log)
  .catch(error => console.log(error))


// Criação de uma promise
const getData = () => {
  return new Promise((resolve, reject) => {
    resolve('Dados aqui')
    reject('Erro aqui')
  })
}

getData()
  .then(data => console.log(data))
  .catch(error => console.log(error))


// Exemplo de como o código pode ficar mais legivel com promises
const logError = error => console.log(error)
const getPokemonName = pokemon => pokemon.name
const showPokemonName = pokemonName => console.log(pokemonName)
  
getPokemon('https://pokeapi.co/api/v2/pokemon/1')
  .then(getPokemonName, logError)
  .then(showPokemonName)




  /* RESUMO:
  - Promise é um objeto que representa o sucesso ou a falha de uma operação assíncrona
  - Para criar uma nova promise usamos a função construtora Promise() junto com o new: new Promise()
  - Uma promise sempre vai ter dois resultados possíveis:
    - resolved: Quando a promise teve sucesso e os dados foram obtidos
    - rejected: Quando ocorre um erro e a promise é rejeitada
  - A função construtora Promise() recebe como argumento uma função com dois parametros: resolve e reject(Convenção universal)
  - Esses parametros são funções embutidas da API de promise que vão ser responsáveis por lidar com o resultado da promise. Um quando ela teve sucesso e o outro quando ocorrer algum erro
  - As funções resolve() e reject() possuem um return implicitado, portanto quando são invocadas todo o código abaixo delas é ignorado
  - Quando uma promise tem sucesso ela fica com o estado: fulfilled. 
  - As promises também possuem 2 outros estados: 
    - pending: Que é o estado inicial de uma promise, não teve nem sucesso e nem foi rejeitada
    - rejected: A operação falhou e a promise foi rejeitada
  - Para acessarmos a resposta de uma promise utilizamos o método then()
  - O método then() é o responsavel por receber a resposta da promise e pode receber como argumento 2 funções:
    - Uma função de callback com um parametro que representa a resposta positiva da promise, com os dados obtidos
    - Uma função de callback com um parametro que representa a resposta negativa da promise, quando houve um erro
  - Uma das vatangens em se usar promises é que passamos a adcionar callbacks conforme for necessário, através do método then(), ao invés de passar esses calsbacks para dentro da nossa função que lida com a operação assíncrona.
  - Dessa forma as promises eliminam o problema de callback hell
  - Para lidarmos com um erro em uma promise usamos o método catch()
  - O método catch() é o responsável por receber o erro que uma promise retorna quando ela falha
  - O método catch() recebe como argumento uma função com uma parametro que representa o erro gerado pela promise
*/