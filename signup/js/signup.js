const fnameField = document.getElementById('fname')
const fnameError = document.getElementById('fname-error')

const lnameField = document.getElementById('lname')
const lnameError = document.getElementById('lname-error')

const emailField = document.getElementById('email')
const emailError = document.getElementById('email-error')

const passwordField = document.getElementById('password')
const passwordError = document.getElementById('password-error')

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


  if (v.isEmpty(fnameField)) {
    v.showErrorStyle(fnameField)
    v.showErrorMessage(fnameError, 'el nombre no puede estar vacío')
    return false
  } else {
    v.hideErrorStyle(fnameField)
    v.hideErrorMessage(fnameError)
  }

  if (v.isEmpty(lnameField)) {
    v.showErrorStyle(lnameField)
    v.showErrorMessage(lnameError, 'el apellido no puede estar vacío')
    return false
  } else {
    v.hideErrorStyle(lnameField)
    v.hideErrorMessage(lnameError)
  }

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
