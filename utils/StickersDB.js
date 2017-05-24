let StickersDB = () => {
  let obj = {}

  obj.getStickers = () => {
    let stickers = []
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xmlhttp.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        console.warn(this.responseText)
        stickers = JSON.parse(this.responseText)
      }
    }

    xmlhttp.open('GET', '../adminCatalog/adminCatalog.php?category=all', true)
    xmlhttp.send()

    return stickers
    
  }


  return obj
}