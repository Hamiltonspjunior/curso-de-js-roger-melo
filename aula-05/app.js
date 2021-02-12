// for loop 
const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
   const HTMLTemplate = `<p>${names[i]}</p>`
   console.log(HTMLTemplate)
}

// While loop
let j = 0

while(j < 5) {
   console.log(`dentro do loope: ${j}`)
   j++
}


/*
   RESUMO
      Controle de fluxo servem para decidirmos como o fluxo do nosso código deve seguir dada diferentes situações
      Loops são usados para repetir a mesma execução de código várias vezes
      Duas estruturas de loop comum são o for e o while
*/