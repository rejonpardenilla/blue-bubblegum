const emailField = document.getElementById('email')
const emailError = document.getElementById('email-error')

const passwordField = document.getElementById('password')
const passwordError = document.getElementById('password-error')

const loginButton = document.getElementById('login-button')

loginButton.addEventListener('click', () => {
  validate()
})

passwordField.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    validate()
  }
})


function validate () {
  let v = Validator()

  if (v.isEmail(emailField)) {
    v.hideErrorStyle(emailField)
    v.hideErrorMessage(emailError)
  } else {
    v.showErrorStyle(emailField)
    v.showErrorMessage(emailError, 'el email es inválido')
    return false
  }

  if (v.isEmpty(passwordField)) {
    v.showErrorStyle(passwordField)
    v.showErrorMessage(passwordError, 'la contraseña no puede estar vacía')
    return false
  } else {
    v.hideErrorStyle(passwordField)
    v.hideErrorMessage(passwordError)
  }

  // TODO: Send to php
  console.log(`email: ${emailField.value}, password: ${passwordField.value}`)
  return true
}
