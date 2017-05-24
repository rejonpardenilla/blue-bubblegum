let StickerManager = () => {
  let obj = {}
  /*
    {
      id: 0,
      title: '',
      price: 0.00,
      category: '',
      description: '',
      imageUrl: ''
    }
  */

  obj.getAllStickers = () => {
    let stickers = []
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest()
    } else {
      // code for IE6, IE5
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }

    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        stickers = JSON.parse(this.responseText)
      }
    }

    xmlhttp.open('GET', '../adminCatalog/adminCatalog.php?category=all', false)
    xmlhttp.send()
    
    return stickers
  }


  obj.showStickers = (id, stickers) => {
    document.getElementById(id).innerHTML = ''

    stickers.forEach( x => {
      let htmlSticker = 
        `<div class="sticker" id="${x.id}"> 
          <img src="${x.imageUrl}"> 
          <span class="title">${x.title}</span> 
          <span class="price">\$${x.price}</span> 
          <span class="add-to-cart">comprar</span>
        </div>`

      document.getElementById(id).innerHTML += htmlSticker
    })
  }



  obj.addSticker = ({ title, price, category, imageUrl }) => {

  }

  obj.deleteSticker = id => {

  }

  obj.getStickersByCategory = category => obj.getAllStickers().filter(x => x.category === category)

  obj.getStickersById = id => obj.getAllStickers().filter(x => x.id === id)



  return obj
}