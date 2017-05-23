<?php session_start() ?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Blue Bubblegum</title>

  <link rel="stylesheet" href="css/shop.css" type="text/css">

</head>
<body>
  <header>
    <div id="logo">
      <a href="#">
        Blue Bubblegum
      </a>
    </div>

    <div id="categories-menu">
      <ul>
        <li><a href="#">TECNOLOGIA</a></li>
        <li><a href="#">COMICS &amp; MANGA</a></li>
        <li><a href="#">PELICULAS</a></li>
        <li><a href="#">OTROS</a></li>
      </ul>
    </div>

    <?php if( isset( $_SESSION[ 'BBL_email' ] ) ) { ?>
      <div id="info-user">
        <p>
          <?php echo $_SESSION[ 'BBL_email' ]; ?>
        </p>
        <a href="../src/LogOut.php">Cerrar Sesión</a>
      </div>
    <?php } else { ?>
      <div id="login-menu">
        <a href="../login">
          login
        </a>
      </div>
    <?php } ?>


    <div id="cart">
      <a href="#">
        <img src="../assets/cart.svg" alt="shoping cart">
      </a>
    </div>

  </header>

  <section id="search-bar">
    <div id="search">
      <input type="text" placeholder="Buscar">
    </div>
  </section>

  <section id="content">
    <div class="sticker" id="0">
      <img src="https://ih0.redbubble.net/image.357542102.4834/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg" alt="sticker">
      <span class="title">Bored Seal</span>
      <span class="price">$2.53</span>
      <span class="add-to-cart">comprar</span>
    </div>
    
    <div class="sticker" id="1">
      <img src="https://ih1.redbubble.net/image.353367608.9428/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg" alt="sticker">
      <span class="title">Smart Unicorn</span>
      <span class="price">$3.80</span>
      <span class="add-to-cart">comprar</span>
    </div>

    <div class="sticker" id="2">
      <img src="https://ih1.redbubble.net/image.331577825.1978/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg" alt="sticker">
      <span class="title">VueJS</span>
      <span class="price">$2.95</span>
      <span class="add-to-cart">comprar</span>
    </div>

    <div class="sticker" id="3">
      <img src="https://ih0.redbubble.net/image.333500281.9085/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1.jpg" alt="sticker">
      <span class="title">Loving cats</span>
      <span class="price">$2.53</span>
      <span class="add-to-cart">comprar</span>
    </div>

    <div class="sticker" id="4">
      <img src="https://ih0.redbubble.net/image.258761544.3923/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg" alt="sticker">
      <span class="title">Ninja dev set</span>
      <span class="price">$3.80</span>
      <span class="add-to-cart">comprar</span>
    </div>

    <div class="sticker" id="5">
      <img src="https://ih1.redbubble.net/image.200308046.2646/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1u8.jpg" alt="sticker">
      <span class="title">Fresspool</span>
      <span class="price">$3.17</span>
      <span class="add-to-cart">comprar</span>
    </div>

    <div class="sticker" id="6">
      <img src="https://ih0.redbubble.net/image.203427672.6751/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg" alt="sticker">
      <span class="title">Pulp fiction dance</span>
      <span class="price">$3.59</span>
      <span class="add-to-cart">comprar</span>
    </div>







  </section>

  <footer>
    <div id="comments">
      <label>¿Comentarios?</label><br>
      <textarea id="comment"></textarea><br>
      <a href="#">Enviar</a>
    </div>
  </footer>


  <script src="../utils/StickerManager.js"></script>
  <script src="../utils/ShoppingCart.js"></script>
  <script src="js/shop.js"></script>

  <script>

    let stickers = document.getElementsByClassName('sticker')
    for (let i = 0; i < stickers.length; i++) {
      stickers[i].addEventListener('click', event => {
        // Por cada sticker, al hacerle click, haz lo siguiente
        
        let detailsWindow = window.open("sticker.php", "", "width=650,height=650")

      })
    }
  </script>
</body>
</html>
