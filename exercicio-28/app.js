/*
  01

  - Crie um objeto de request;
  - Abra este website https://pokeapi.co/;
  - Baseado no exemplo de endpoint exibido no website, abra uma requisição do 
    tipo GET para obter dados do pokémon 'pikachu';
  - Envie a requisição e trackeie ela usando o listener de evento adequado;
  - Verifique se o estado da requisição representa que a operação foi completada
    e se o status http do request indica que a requisição foi bem sucedida;
  - Se as condições do item acima forem atendidas, exiba no console o texto da 
    resposta que a requisição obteve;
  - Se apenas a 1ª condição for atendida (o estado da requisição representa que 
    a operação foi completada), exiba no console a mensagem 'Não foi possível 
    obter os dados do pokémon';
  - Teste também a verificação do item acima.
*/

const request = new XMLHttpRequest()

request.addEventListener('readystatechange', () => {
  const isRequestComplete = request.readyState === 4
  const isRequestSuccessful = request.status === 200
  
  if (isRequestComplete) {
    if (isRequestSuccessful) {
      console.log(request.responseText)
      return
    }

    console.log('Não foi possível obter os dados do pokémon')
  }
})

request.open('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu')
request.send()

/*
  02

  - Crie um objeto que contém suas informações pessoais;
  - As propriedades devem armazenar: 
    - Seu nome;
    - Seu sobrenome;
    - Seu sexo;
    - Sua idade (number);
    - Sua altura (number);
    - Seu peso (number);
    - Se você está andando (boolean iniciado em false);
    - Quantos metros você caminhou (number iniciado em 0).
*/

const personalInfo = {
  firstName: 'Hamilton',
  lastName: 'Junior',
  sex: 'Masculino',
  age: 25,
  height: 1.72,
  weight: 91.3,
  isWalking: false,
  metersWalked: 0
}

/*
  03

  - Logo abaixo, adicione ao objeto um método que adiciona 1 ao valor da 
    propriedade que armazena a idade;
  - A cada vez que o método é invocado, 1 deve ser somado à idade atual;
  - Após criar o método, adicione 5 anos à idade do objeto.
*/

personalInfo.incrementAge = () => {
  personalInfo.age++
}

for (let i = 1; i <= 5; i++) {
  personalInfo.incrementAge()
}

console.log(personalInfo.age)

/*
  04

  - Logo abaixo, adicione ao objeto um método que soma a quantidade de metros 
    caminhados ao valor que foi recebido como parâmetro do método;
  - Este método também deve modificar o boolean do objeto que indica se a 
    pessoa representada pelo objeto está, ou não, andando;
  - Após criar o método, faça a pessoa caminhar alguns metros, invocando o 
    método 4x, com diferentes metragens passadas por parâmetro.
*/

personalInfo.sumMetersWalked = metersWalked => {
  personalInfo.metersWalked += metersWalked
  personalInfo.isWalking = true
}

personalInfo.sumMetersWalked(1500)
personalInfo.sumMetersWalked(800)
personalInfo.sumMetersWalked(700)
personalInfo.sumMetersWalked(1200)

console.log(personalInfo.isWalking, personalInfo.metersWalked)

/*
  05

  - Logo abaixo, adicione ao objeto um método que retorna a seguinte string:
  
  'Oi. Eu sou o NOME_COMPLETO, tenho IDADE anos, ALTURA metros de altura, 
  peso PESO quilos e, só hoje, eu já caminhei QUANTIDADE_DE_METROS_CAMINHADOS 
  metros.'
  
  - Antes de retornar a string, faça as seguintes validações:
    - Se o sexo do objeto for "Feminino", antes do nome da pessoa, substitua "o"
      por "a";
    - Se a idade for 1, substitua "anos" por "ano", no singular;
    - Se a quantidade de metros caminhados for 1, substitua "metros" por 
      "metro", no singular.
*/

const getSingularOrPlural = (unit, singular, plural) => 
  unit === 1 ? singular : plural

personalInfo.getGreetingMessage = () => {
  const { firstName, lastName, age, sex, height, weight, metersWalked } = personalInfo
  const fullName = `${firstName} ${lastName}`
  const correctPronoun = sex === 'Feminino' ? 'a' : 'o'
  const correctAgeWord = getSingularOrPlural(age, 'ano', 'anos')
  const correctMetersWord = getSingularOrPlural(metersWalked, 'metro', 'metros')

  return `Oi. Eu sou ${correctPronoun} ${fullName}, tenho ${age} ${correctAgeWord}, ${height} metros de altura, peso ${weight} quilos e, só hoje, eu já caminhei ${metersWalked} ${correctMetersWord}.`
}

console.log(personalInfo.getGreetingMessage())

/*
  06

  - Crie uma função que recebe um valor como argumento e retorna um boolean 
    indicando se o valor é truthy ou falsy;
  - Invoque a função e, a cada invocação, passe como argumento um valor falsy.
    - Faça isso até passar todos os valores falsy;
  - Invoque a função e, desta vez, a cada invocação, passe como argumento um 
    valor truthy;
    - Faça isso até que 7 valores truthy sejam passados.
*/

const isTruthy = value => !!value

console.log(isTruthy(false))
console.log(isTruthy(0))
console.log(isTruthy(''))
console.log(isTruthy(null))
console.log(isTruthy(undefined))
console.log(isTruthy(NaN))

console.log(isTruthy(true))
console.log(isTruthy(1))
console.log(isTruthy('Hamilton'))
console.log(isTruthy([]))
console.log(isTruthy({ foo: 'bar' }))
console.log(isTruthy(() => {}))
console.log(isTruthy(-10))

/*
  07

  - Crie uma função que recebe um parâmetro, que será o nome de um livro;
  - Essa função deve conter um objeto com 3 propriedades, que são nomes de 
    livros;
  - Cada uma dessas 3 propriedades deve armazenar um novo objeto que terá 
    outras 3 propriedades que armazenam:
      - A quantidade de páginas (number);
      - Autor;
      - Editora.
  - Faça a função retornar o objeto que representa o livro passado por 
    parâmetro;
  - Se o parâmetro não for passado, faça a função retornar o objeto com todos 
    os livros.

  Dica: propriedades de objetos podem ser declaradas como strings.
*/

const getBookInfo = bookName => {
  const books = {
    'Harry Potter e a pedra filosofal': {
      pages: 255, 
      author: 'J.K. Rowling',
      publisher: 'Rocco'
    },
    'O iluminado': {
      pages: 313, 
      author: 'Stephen King',
      publisher: 'Objetiva'
    },
    'Jogador nº 1': {
      pages: 462, 
      author: 'Ernest Cline',
      publisher: 'Leya'
    }
  }

  return books[bookName] || books
}

console.log(getBookInfo('O iluminado'))