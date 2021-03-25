// Lib data-fns
const present = new Date()
const past = new Date('May 1 2020 07:00:00')

console.log(dateFns.format(present, 'DD/MM/YYYY'))

console.log(dateFns.distanceInWords(present, past, { addSuffix: true }))



/* RESUMO:  
- A date-fns é um lib para facilitar o trabalho com datas em javascript
*/