var content = document.getElementById("content")
var totalPriceDiv = document.getElementById("totalPrice")
var delCar = document.getElementById("delCar")
delCar.addEventListener("click", kill_cookies)

var totalPrice = 0

function loadStickers(){
	var cookies = JSON.parse(readCookie("sticker_cookies"))
	console.log(cookies)
	for (cookie_id in cookies) {
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
	    		content.innerHTML += `<span class="title">${sticker.title}</span><br>
	    		<div class="sticker" id="${sticker.id}">
		      	<img src="${sticker.imageUrl}" alt="sticker">
		      	<span class="price" id="ind">Precio individual: $${sticker.price}
				<br>Precio total: $${(cookies[sticker.id]) * sticker.price}</span>
		      	<span class="quantity">Cantidad: ${cookies[sticker.id]}</span>
	    		</div>`
	    		totalPrice = totalPrice + ((cookies[sticker.id]) * sticker.price)
	    		totalPriceDiv.innerHTML = totalPrice
	        }
	    }
	    xmlhttp.open("GET","../adminCatalog/adminCatalog.php?id=" + cookie_id,true)
	    xmlhttp.send()
	}
}

function readCookie(name) {
    var cookies = document.cookie.split(';'),
        length = cookies.length,
        i,
        cookie,
        nameEQ = name + '=';
    for (i = 0; i < length; i += 1) {
        cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

function kill_cookies(){
    createCookie("sticker_cookies", "", -1);
    window.close();
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime()+(days*24*60*60*1000));
        var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
}

window.addEventListener("load", loadStickers)