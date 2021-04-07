// Código Assíncrono
console.log(1)
console.log(2)

setTimeout(() => {
  console.log('Função de callback executada')
}, 2000)

console.log(3)
console.log(4)


/* RESUMO:  
  - Uma operação assíncrona é um processo que inicia agora e finaliza esse processo posteriormente
  - O JavaScript é naturalmente uma linguagem síncrona, ou seja, ela executa uma instrução 
  após a outra de cima pra baixo
  - O JavaScript é uma linguagem Single Thread(fio)
  - Thread é a sequência na qual as instruções são executadas. Como JS é single Thread, só pode executar uma delas por vez
  - Ao se fazer uma requisição em um Banco de dados, por exemplo, essa operação leva 
  um certo tempo, e enquanto essa operação não for finalizada todo o restante do código 
  fica em espera, isso é um código bloqueante(Blocking code)
  - Já em um código assincrono ao executarmos uma requisição a um banco de dados, essa operação pode iniciar e ser
  finalizada posteriormente, não bloqueando o restante das instruções. 
  - Nesse tipo de operação, normalmente é utilizado uma função de callback que vai ser responsável por lidar com a
  resposta da requisição, no momento em que ela finalizar
  - Para fazer uma operação assíncrona o browser lida com essa operação em uma thread separada, para que o restante 
  da aplicação continue executando
  - Requests HHTP são usados para fazer requisições a um banco de dados ou uma API, por exemplo
  - API(Application Programming Interface) é uma forma de uma aplicação utilizar as funcionalidades de outra. Ou seja,
  uma API fornece uma interface para um sistema acessar as funcionalidades de outro sistema
  - O HTTP(Hypertext Transfer Protocol) é o protocolo padrão utilizado na internet para 
  troca de informação entre computadores
  - As requisições HTTP são feitas em um endpoint, que é uma URL fornecida pela API ou 
  servidor para que nós possamos coletar informações
  - Sempre que um request HTTP é feito a API ou Servidor retorna uma resposta(response), com as informações requisitadas
  - A resposta que o servidor nos retorna, normalmente, é no formato JSON
  - JSON(JavaScript Object Notation) é um tipo de arquivo utilizado para troca e armazenamento
    de informações entre sistemas
  - Quando fazemos uma requisição para OBTER informações, utilizamos o método GET
*/