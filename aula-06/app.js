// if, else e else if statments
const password = 'oi123'

if (password.length >= 12 && password.includes('1')) {
   console.log('Senha muito forte =)')
} else if(password.length >= 8 || password.includes('1') && password.lenght >= 5) {
   console.log('Senha forte')
} else {
   console.log('A senha deve ter 8 ou mais caracteres')
}

// Operadores lógicos "OU" || e "E" &&