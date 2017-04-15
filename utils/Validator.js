function Validator () {
  let obj = {}


  obj.isEmail = email => {
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return regex.test(email.value)
  }


  obj.isEmpty = field => (field.value === '')


  obj.showErrorStyle = field => (field.className = 'error')


  obj.hideErrorStyle = field => (field.className = '')


  obj.showErrorMessage = (container, message) => (container.innerText = message)


  obj.hideErrorMessage = container => (container.innerText = '')


  return obj
}
