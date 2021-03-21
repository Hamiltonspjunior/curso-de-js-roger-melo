// Data e Hora

const present = new Date()

console.log(present)

console.log('getFullYear:', present.getFullYear())
console.log('getMonth:', present.getMonth())
console.log('getDate:', present.getDate())
console.log('getDay:', present.getDay())
console.log('getHours:', present.getHours())
console.log('getMinutes:', present.getMinutes())
console.log('getSeconds:', present.getSeconds())

console.log('timestamp:', present.getTime())

console.log('toDateString:', present.toDateString())
console.log('toTimeString:', present.toTimeString())
console.log('toLocaleString:', present.toLocaleString())


// Comparando timestamps
const past = new Date('May 1 2020 7:47:00')

const diference = present.getTime() - past.getTime()
console.log(diference)

const seconds = Math.round(diference / 1000)
console.log({ seconds })

const minutes = Math.round(seconds / 60)
console.log({ minutes })

const hours = Math.round(minutes / 60)
console.log({ hours })

const days = Math.round(hours / 24)
console.log({ days })

const months = Math.round(days / 30)
console.log({ months })

const years = Math.floor(months / 12)
console.log({ years })

console.log(`Escrito a ${days} dias`)

const timestamp = 1616287551501
console.log(new Date(timestamp))

/* RESUMO:  
- Em JS datas são um tipo de objeto, ou seja, são tipos de referência
- O JS disponibiliza um construtor Date() para se trabalhar com datas
- Sempre que uma data é criada ela representa o momento atual em que o arquivo foi lido, ou seja, o presente
- O Objeto Date possui diversos métodos para conseguirmos capturar o ano, dia, mes, e horas atuais
- O método getMonth é zero based, isso significa que Janeiro é o mês 0 e assim por diante
- O método getDay também é zero based, Domingo é o dia 0
- Timestamps represeta o número de milisegundos passados desde 01 de janeiro de 1970 até o momento atual
- O méto getTime() retorna o timestamp da data com a qual se está trabalhando
- Timestamps são úteis para fazer comparações de datas
- É possível passar uma data para o construtor Date para representar datas passadas ou futuras
- É possível passar um timestamp para o construtor Date e ele retornará a data daquele timestamp
- É possível comparar dois timestamps para calcular a diferença entre datas.
*/