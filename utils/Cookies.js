function Cookies () {
  let obj = {}


  obj.set = (key, value) => {
    document.cookie = key + "=" + value
  }


  obj.get = key => {
    let cookies = obj.getAll()
    return cookies[key]
  }


  obj.getAll = () => {
    var cookies = []

    for (let cookie of document.cookie.split('; ')) {
      let [name, value] = cookie.split('=')
      cookies[name] = decodeURIComponent(value)
    }

    return cookies
  }


  obj.getAsJSON = (key) => {
    let string = obj.get(key)
    return JSON.parse(string)
  }

  return obj

}
