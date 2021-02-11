// Validação básica de usuário

const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const testUsername = username => /^[a-zA-z]{6,12}$/.test(username)

form.addEventListener('submit', event => {
   event.preventDefault()

   const isAValideUsername = testUsername(event.target.username.value)

   if (isAValideUsername) {
      feedback.textContent = 'Username válido =)'
      return
   }

   feedback.textContent = 'O username deve conter entre 6 a 12 caracteres e deve conter apenas letras'
})

form.username.addEventListener('keyup', event => {
   const isAValideUsername = testUsername(event.target.value)

   if (isAValideUsername) {
      form.username.setAttribute('class', 'success')
      return
   }
   
   form.username.setAttribute('class', 'error')
})


/*
   RESUMO/ANOTAÇÕES:
      - O evento keyup monitora quando uma tecla retorna após ser pressionada
*/