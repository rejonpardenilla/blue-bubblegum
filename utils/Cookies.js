function Cookies () {
  let obj = {}


  obj.set = (key, value) => {
    document.cookie = key + "=" + value
  }


  obj.setJSON = (key, value) => {
    value = JSON.stringify(value)
    obj.set(key, value)
  }


  obj.get = key => {
    let cookies = obj.getAll()
    return (cookies[key] === '') ? null : cookies[key]
  }


  obj.getAll = () => {
    var cookies = []

    for (let cookie of document.cookie.split('; ')) {
      let [name, value] = cookie.split('=')
      cookies[name] = decodeURIComponent(value)
    }

    return cookies
  }


  obj.getJSON = key => {
    let string = obj.get(key)
    return JSON.parse(string)
  }


  obj.delete = key => {
    document.cookie = key + '=;'
  }

  return obj

}
