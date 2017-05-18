const emailField = document.getElementById('email')
const emailError = document.getElementById('email-error')

const passwordField = document.getElementById('password')
const passwordError = document.getElementById('password-error')

const loginButton = document.getElementById('login-button')
const dataError = document.getElementById('data-error')

loginButton.addEventListener('click', () => {
  let correctdata = validate()

  if (correctdata) {
    let userEmail = emailField.value
    let userPassword = passwordField.value

    let userData = { email: userEmail, password: userPassword }

    sendData( userData, ( data ) => {
      if (data.complete) {
        window.location.href  = '../index.php'

      } else {
        dataError.innerHTML = 'Usuario y/o Contraseña Invalidos.'
      }
    } )
  }
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

function sendData( userData, callback ) {
  let xhttp = new XMLHttpRequest()

  xhttp.open( 'POST', '../src/LoginUser.php' )
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.send( JSON.stringify( userData ) )
  xhttp.onload = () => {
    console.log( xhttp.response )
    callback( JSON.parse( xhttp.response ) )

  }
}
