
//let sm = StickerManager()
/*
let stickers = sm.getAllStickers()

sm.showStickers('content', stickers)

sm.showStickers('content', sm.getStickersByCategory('technology'))
*/
const searchBar = document.getElementById('sb')
searchBar.addEventListener('input', filter)

document.getElementById('cart').addEventListener('click', event => {
  window
    .open("", "", "width=650,height=650")
    .location.href = 'cart.php'
})

var stickersArray = []

function listStickers(category){
	if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        	stickersArray = JSON.parse(this.responseText)
            displayStickers(this.responseText)
          //sm.showStickers('content', JSON.parse(array))
        }
    }
    xmlhttp.open("GET","../adminCatalog/adminCatalog.php?category=" + category,true)
    xmlhttp.send()
}

function displayStickers(stickers){
    stickers = JSON.parse(stickers)
    content.innerHTML = ""
    stickers.forEach( sticker => {
      var htmlSticker =
        `<div id="${sticker.id}" class="sticker" style="cursor: pointer;" onclick="obtainDetails(this.id)">` +
          `<img src="${sticker.imageUrl}">` +
          `<span class="title">${sticker.title}</span>` +
          `<span class="price">\$${sticker.price}</span>` +
        `</div>`

      content.innerHTML += htmlSticker
    })
}

function filter(){
    content.innerHTML = ""
    var text = searchBar.value
    stickersArray.forEach( sticker => {
        var stickerTitle = sticker.title
        if (stickerTitle.indexOf(text) !== -1){
            var htmlSticker =
            `<div id="${sticker.id}" class="sticker" style="cursor: pointer;" onclick="obtainDetails(this.id)">` +
                `<img src="${sticker.imageUrl}">` +
                `<span class="title">${sticker.title}</span>` +
                `<span class="price">\$${sticker.price}</span>` +
            `</div>`

            content.innerHTML += htmlSticker
        }
    })
}

function obtainDetails(id){
    var popupWindow = openWindow()
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var sticker = JSON.parse(this.responseText)[0]
            removeStickerStorage()
            saveStickerStorage(sticker)
            popupWindow.document.open()
            var content =
                `<HTML>
                    <HEAD><TITLE></TITLE>
                          <link rel="stylesheet" href="css/sticker.css">
                    </HEAD>
                    <BODY style="background-color: #E8EAF6;">
                       <script type="text/javascript">
                        window.addEventListener("load", function () {
                            window.location.href = 'sticker.php'
                        })
                       </script>
                    </BODY>
                </HTML>`
            popupWindow.document.writeln(content)
            popupWindow.document.close()
        }
    }
    xmlhttp.open("GET","../adminCatalog/adminCatalog.php?id=" + id,true)
    xmlhttp.send()
}

function saveStickerStorage(sticker){
    if (typeof(Storage) != "undefined"){
        localStorage.setItem(sticker.title, JSON.stringify(sticker));
    } else{
    }
}

function removeStickerStorage(){
    keys = Object.keys(localStorage);
    longitudStorage = keys.length;
    for (i in keys){
        localStorage.removeItem(keys[i]);
    }
}

function openWindow(){
    var h = 650
    var w = 650
    var wLeft = window.screenLeft ? window.screenLeft : window.screenX
    var wTop = window.screenTop ? window.screenTop : window.screenY
    var left = wLeft + (window.innerWidth / 2) - (h / 2)
    var top = wTop + (window.innerHeight / 2) - (w / 2)
    var style = 'height=250px,width=' + (w+150) + ',left=' + left + ',top=' + (top+200) + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=no'
    var popupWindow = window.open(null,'popUpWindow', style)
    popupWindow.focus()

    return popupWindow
}

function deleteSticker(stickerTitle){
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest()
    } else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

        }
    }
    xmlhttp.open("DELETE","adminCatalog/adminCatalog.php?title=" + stickerTitle,true)
    xmlhttp.send()
}

function sendMail() {
    com = {
        "msg": comments.value
    }
    var xhttp = new XMLHttpRequest()
    xhttp.open( 'POST', 'add-sticker.php' )
    xhttp.send( formData )
    xhttp.onload = () => {
        console.log( xhttp.response )
        wnd = window.opener;
        wnd.location.href = 'index.php'
        window.close()
    }
}

window.onload = function () {
	listStickers("all")
}
