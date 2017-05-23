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
    /*
    let request = new XMLHttpRequest()
    const URL = '../adminCatalog.php'

    request.open('GET', URL)
    
    request.onload = () => {
      // Send
    }

    request.send()
    */
    
    let stickers = [
      {
        title: 'Bored Seal',
        price: 2.53,
        category: 'other',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In explicabo dolor accusamus dolorem laudantium blanditiis dicta, voluptatum tempore quisquam! Veritatis incidunt quae earum ipsa, voluptate laboriosam rerum tenetur amet voluptatem.',
        imageUrl: 'https://ih0.redbubble.net/image.357542102.4834/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg'
      },
      {
        title: 'Smart Unicorn',
        price: 3.80,
        category: 'technology',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero natus, minus qui deserunt facere quidem veniam at, quia impedit! Laudantium dolore, omnis explicabo harum quo sed cupiditate earum? Vero, perspiciatis!',
        imageUrl: 'https://ih1.redbubble.net/image.353367608.9428/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg'
      }
    ]

    return stickers
  }


  obj.showStickers = (id, stickers) => {
    document.getElementById(id).innerHTML = ''

    stickers.forEach( x => {
      let htmlSticker = 
        `<div class="sticker" id="${x.id}">` +
          `<img src="${x.imageUrl}">` +
          `<span class="title">${x.title}</span>` +
          `<span class="price">\$${x.price}</span>` +
        `</div>`

      document.getElementById(id).innerHTML += htmlSticker
    })
  }



  obj.addSticker = ({ title, price, category, imageUrl }) => {

  }

  obj.deleteSticker = id => {

  }

  obj.getStickersByCategory = category => obj.getAllStickers().filter(x => x.category === category)



  return obj
}