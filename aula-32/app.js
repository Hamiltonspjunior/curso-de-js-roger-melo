// Requests sequenciais vs paralelos
const getPokemon = async () => {
  const bulbasaur = fetch('https://pokeapi.co/api/v2/pokemon/1')
  const charmander = fetch('https://pokeapi.co/api/v2/pokemon/4')
  const squirtle = fetch('https://pokeapi.co/api/v2/pokemon/7')

  const result = await Promise.all([bulbasaur, charmander, squirtle])

  result.forEach(async response => console.log(await response.json()))

  // console.log(await bulbasaur.json())
  // console.log(await charmander.json())
  // console.log(await squirtle.json())
}

getPokemon()


// Try/Catch
// try {
//   console.log(oi)
// } catch (error) {
//   console.log(error)
// }


// Tratando requests com try/catch e erros personalizados
const getUsers = async () => {
  try {
    const response = await fetch('./todos.json')

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }
    
    return response.json()
  } catch (error) {
    console.log(error)
  }
}


const logUsers = async () => {
  const users = await getUsers()
  console.log(users)
}


logUsers()


  /* RESUMO:
  - Requests sequenciais são aqueles que são executados em sequência e um request não pode ser feito até o anterior ser finalizado. 
  - Quando fazemos um request sequêncial o próximo request só poderá ser feito quando o anterior for finalizado, enquanto isso ficará em espera. 
  - Devemos usar request sequenciais quando um request depende das informações do outro para ser feito.
  - Requests paralelos são aqueles que acontecem paralelamente, ao mesmo tempo sem ter que aguardar a finalização de outro
  - Quando fazemos requests paralelos um request vai iniciar imediatamente sem ter que aguardar outro ser finalizado. 
  - Podemos usar request paralelos quando um request NÃO depende das informações de outro
  - Para lidar com vários request podemos usar o método all() do objeto Promise. 
  - O método all() recebe como argumento um array de promises e retorna uma única promise com um array contendo o resultado de todas as outras promises quando essas forem resolvidas. 
  - Se uma das promises for rejeitada, a promise retornada pelo método all() também é rejeitada
  - Try/Catch é uma declaração que tenta executar um trecho de código e caso não seja possível, devido a um erro, nos permite executar alguma ação referente a esse erro, de forma que isso não trave a execução do restante do nosso código.
  - Dentro do block try {} colocamos o código que queremos tentar executar, caso haja um erro, o código dentro do block catch é executado.
  - O bloco catch recebe um argumento error, contendo informações sobre o erro lançado, como o nome do erro e sua menssagem, através das propriedades name e message
  - O try/catch não impede a execução do restante do código, então mesmo que um erro aconteça o restante do código será executado normalmente.
  - O bloco catch pode ser útil para verificarmos se um determinado tipo de erro aconteceu durante a execução da aplicação e assim executar uma determinada ação de acordo com o tipo de erro
  - Devemos usar o try/catch quando queremos tratar possíveis erros que podem acontecer na aplicação
  - Se não é necessário tratar algum tipo de erro não é recomendado usar o try/catch pois esse exige mais do processamento do computador
*/