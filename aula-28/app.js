// Fazendo requests HTTP
const request = new XMLHttpRequest() // Objeto de request

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseText)
  }
})

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/') // Abrindo requesição
request.send() // Enviando a requisição



/* RESUMO:
  - Para se fazer requests HTTP é necessário criar um objeto de request
  - O método que cria o objeto de request é o XMLHttpRequest
  - O método open abre uma requisição http e recebe dois parâmetros: o método (GET, POST, PUT e etc), e o endpoint para onde a requisição será feita
  - O método send envia a requisição para o endpoint especificado no método open
  - O evento readystatechange monitora as mudanças de status da requisição http
  - O readyState possui 5 tipos de estados que são representados por um número de 0 a 4, são eles:
    - 0 - UNSENT 	Client has been created. open() not called yet.
    - 1 - OPENED 	open() has been called.
    - 2 - HEADERS_RECEIVED 	send() has been called, and headers and status are available.
    - 3 - LOADING 	Downloading; responseText holds partial data.
    - 4 - DONE 	The operation is complete.
  - Um request http possui uma série de códigos de status que representam se a requisição foi feita com sucesso. 
  - O código 200 indica que a requisição foi feita com sucesso. 
  - Outros códigos de status podem ser encontrados na MDN: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/