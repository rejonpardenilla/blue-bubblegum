let StickerManager = () => {
  let obj = {}

  let stickerToHtml = ({ title, price, imageUrl }) => {
    let htmlSticker = 
      `<div class="sticker">` +
        `<img src="${imageUrl}">` +
        `<span class="title">${title}</span>` +
        `<span class="price">\$${price}</span>` +
      `</div>`

    return htmlSticker
  }

  let getAllStickers = () => {

  }


  obj.getStickers = () => {

  }

  obj.addSticker = () => {

  }

  obj.deleteSticker = () => {

  }

  obj.filterByCategory = category => {

  }


  return obj
}