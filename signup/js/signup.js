const fnameField = document.getElementById('fname')
const lnameField = document.getElementById('lname')
const emailField = document.getElementById('email')
const passwordField = document.getElementById('password')
const signupButton = document.getElementById('signup-button')

signupButton.addEventListener('click', () => {
  let correctdata = validate()

  if(correctdata) {
    let userName = fnameField.value + ' ' + lnameField.value
    let userEmail = emailField.value
    let userPassword = passwordField.value

    let userData = { name: userName, email: userEmail, password: userPassword }

    sendData( userData, ( data ) => {

      if ( data.complete ) {
        window.location.href  = '../index.php'
      }
    }  )

    //window.location.href  = '../index.php'
  }
})

passwordField.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    validate()
  }
})


function validate () {
  let v = Validator()


  if (v.isEmpty('fname')) {
    v.showErrorStyle('fname')
    v.showErrorMessage('fname-error', 'el nombre no puede estar vacío')
    return false
  } else {
    v.hideErrorStyle('fname')
    v.hideErrorMessage('fname-error')
  }

  if (v.isEmpty('lname')) {
    v.showErrorStyle('lname')
    v.showErrorMessage('lname-error', 'el apellido no puede estar vacío')
    return false
  } else {
    v.hideErrorStyle('lname')
    v.hideErrorMessage('lname-error')
  }

  if (v.isEmail('email')) {
    v.hideErrorStyle('email')
    v.hideErrorMessage('email-error')
  } else {
    v.showErrorStyle('email')
    v.showErrorMessage('email-error', 'el email es inválido')
    return false
  }

  if (v.isEmpty('password')) {
    v.showErrorStyle('password')
    v.showErrorMessage('password-error', 'la contraseña no puede estar vacía')
    return false
  } else {
    v.hideErrorStyle('password')
    v.hideErrorMessage('password-error')
  }

  // TODO: Send to php
  console.log(`
    name: ${fname.value + " " + lname.value},
    email: ${emailField.value},
    password: ${passwordField.value}
    `)
  return true
}

function sendData( userData, callback ) {

  let xhttp = new XMLHttpRequest()

  xhttp.open( 'POST', '../src/RegisterUser.php' )
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
  xhttp.send( JSON.stringify( userData ) )
  xhttp.onload = () => {
    console.log( xhttp.response )
    callback( JSON.parse( xhttp.response ) )

  }
}
