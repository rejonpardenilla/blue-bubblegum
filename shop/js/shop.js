let sm = StickerManager()

let stickers = sm.getAllStickers()

sm.showStickers('content', stickers)

sm.showStickers('content', sm.getStickersByCategory('technology'))


document.getElementById('cart').addEventListener('click', event => {
  window
    .open("", "", "width=650,height=650")
    .location.href = 'cart.php'
})

var array = []

function listStickers(category){
    console.log(document.cookie)
	if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.warn(this.responseText)
        	array = this.responseText
        	console.log(JSON.parse(array))
          sm.showStickers('content', JSON.parse(array))
        }
    }
    xmlhttp.open("GET","../adminCatalog/adminCatalog.php?category=" + category,true)
    xmlhttp.send()
}

window.onload = function () {
	listStickers("all")
    console.log()
}
