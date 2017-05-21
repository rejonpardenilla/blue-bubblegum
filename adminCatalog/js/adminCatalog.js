function listAll(){
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
        };
        xmlhttp.open("GET","adminCatalog/adminCatalog.php?category=all",true)
        xmlhttp.send()
}

function displayStickers(stickers){
	stickers = JSON.parse(stickers);
	stickers.forEach( sticker => {
      let htmlSticker = 
        `<div class="sticker">` +
          `<img src="../stickersImages/foca.jpg">` +
          `<span class="title">${sticker.title}</span>` +
          `<span class="price">\$${sticker.price}</span>` +
        `</div>`

      document.getElementById("content").innerHTML += htmlSticker
    })
}

window.addEventListener("load", listAll)