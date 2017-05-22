let sm = StickerManager()

let stickers = sm.getAllStickers()

sm.showStickers('content', stickers)

sm.showStickers('content', sm.getStickersByCategory('technology'))


document.getElementById('cart').addEventListener('click', event => {
  window
    .open("", "", "width=650,height=650")
    .location.href = 'cart.php'
})
