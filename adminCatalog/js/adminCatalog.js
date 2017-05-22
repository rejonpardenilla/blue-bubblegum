const logoButton = document.getElementById('logo')
logoButton.addEventListener('click', function () {
	listStickers('all')
})

const technologyButton = document.getElementById('technology')
technologyButton.addEventListener('click', function () {
	listStickers('technology')
})

const comicsMangaButton = document.getElementById('comics-manga')
comicsMangaButton.addEventListener('click', function () {
	listStickers('comics-manga')
})

const moviesButton = document.getElementById('movies')
moviesButton.addEventListener('click', function () {
	listStickers('movies')
})

const othersButton = document.getElementById('others')
othersButton.addEventListener('click', function () {
	listStickers('others')
})

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
        	displayStickers(this.responseText)
        }
    }
    xmlhttp.open("GET","adminCatalog/adminCatalog.php?category=" + category,true)
    xmlhttp.send()
}

function displayStickers(stickers){
	stickers = JSON.parse(stickers)
	const content = document.getElementById("content")
	content.innerHTML = ""
	stickers.forEach( sticker => {
      var htmlSticker = 
        `<div id="${sticker.title}" class="sticker" onclick="obtainDetails(this.id)">` +
          `<img src="../stickersImages/foca.jpg">` +
          `<span class="title">${sticker.title}</span>` +
          `<span class="price">\$${sticker.price}</span>` +
        `</div>`

      content.innerHTML += htmlSticker
    })
}

function obtainDetails(stickerTitle){
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
        	console.warn(this.responseText)
        	var sticker = (JSON.parse(this.responseText))[0]
        	popupWindow.document.open()
			var content = 
				`<HTML>
					<HEAD><TITLE></TITLE></HEAD>
					<BODY style="background-color: #E8EAF6;">
						<div style="display: inline-block;float: left">
							<img style="margin-top: 18px;height: 300px;max-width: 300px;" src="../stickersImages/foca.jpg">
						</div>
						<div style="display: inline-block;">
							<label style="width: 70px; margin-left: 50px;">${sticker['title']}</label>
							<br>
							<input style="width: 70px; margin-top: 80px; margin-left: 50px;" type="button" value="Comprar"/>
							<br>
							<input style="width: 70px; margin-top: 20px; margin-left: 50px;" type="button" value="Modificar"/>
							<br>
							<input style="width: 70px; margin-top: 21px; margin-left: 50px;" type="button" value="Eliminar"/>
							<br>
							<input style="width: 70px; margin-top: 20px; margin-left: 50px;" type="button" value="Cerrar"/>
						</div>
					</BODY>
				</HTML>`
			popupWindow.document.writeln(content)
			popupWindow.document.close()
        }
    }
    xmlhttp.open("GET","adminCatalog/adminCatalog.php?title=" + stickerTitle,true)
    xmlhttp.send()
}

function openWindow(){
	var h = 350
	var w = 350
	var wLeft = window.screenLeft ? window.screenLeft : window.screenX
  	var wTop = window.screenTop ? window.screenTop : window.screenY
  	var left = wLeft + (window.innerWidth / 2) - (h / 2)
  	var top = wTop + (window.innerHeight / 2) - (w / 2)
	var style = 'height=' + h + ',width=450px,left=' + (left-100) + ',top=' + top + ',resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=no'
	var popupWindow = window.open(null,'popUpWindow', style)
	popupWindow.focus()

	return popupWindow
}

function modifySticker(sticker){
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
    xmlhttp.open("PUT","adminCatalog/adminCatalog.php?title=" + stickerTitle,true)
    xmlhttp.send()
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

window.addEventListener("load", function () {
	listStickers('all')
})