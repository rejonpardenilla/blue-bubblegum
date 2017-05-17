let sm = StickerManager()

let stickers = sm.getAllStickers()

sm.showStickers('content', stickers)

sm.showStickers('content', sm.getStickersByCategory('technology'))