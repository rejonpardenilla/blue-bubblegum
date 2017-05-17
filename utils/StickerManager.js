let StickerManager = () => {
  let obj = {}


  obj.getAllStickers = () => {
    let request = new XMLHttpRequest()
    const URL = '../adminCatalog.php'

    request.open('GET', URL)
    
    request.onload = () => {
      // Send
    }

    request.send()

    let stickers = [
      {
        title: 'Bored Seal',
        price: 2.53,
        category: 'other',
        imageUrl: 'https://ih0.redbubble.net/image.357542102.4834/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg'
      },
      {
        title: 'Smart Unicorn',
        price: 3.80,
        category: 'technology',
        imageUrl: 'https://ih1.redbubble.net/image.353367608.9428/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg'
      }
    ]

    return stickers
  }


  obj.showStickers = (id, stickers) => {
    document.getElementById(id).innerHTML = ''

    stickers.forEach( x => {
      let htmlSticker = 
        `<div class="sticker">` +
          `<img src="${x.imageUrl}">` +
          `<span class="title">${x.title}</span>` +
          `<span class="price">\$${x.price}</span>` +
        `</div>`

      document.getElementById(id).innerHTML += htmlSticker
    })
  }



  obj.addSticker = ({ title, price, category, imageUrl }) => {

  }

  obj.deleteSticker = () => {

  }

  obj.getStickersByCategory = category => obj.getAllStickers().filter(x => x.category === category)



  return obj
}