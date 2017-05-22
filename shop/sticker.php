<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sticker</title>
  <link rel="stylesheet" href="css/sticker.css">
</head>
<body>
  <section id="content">
    <div class="sticker" id="0">
      <img src="https://ih0.redbubble.net/image.357542102.4834/st%2Csmall%2C420x460-pad%2C420x460%2Cf8f8f8.lite-1u2.jpg" alt="sticker">
      <span class="title">Bored Seal</span>
      <span class="delete">X</span>
      <span class="edit"><a href="#">editar</a></span> 
      <span class="price">$2.53</span>
    </div>
    <div class="description">
      <span>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur nemo quia odit tempore, ipsa adipisci perferendis. Incidunt architecto numquam quidem consequatur, amet, praesentium provident illum autem, rem blanditiis cupiditate officiis.
      </span>
    </div>
  </section>
  <script>
    document
      .getElementsByClassName('edit')[0]
      .addEventListener('click', event => {
        window.location.href = 'edit-sticker.php';
      })
  </script>
</body>
</html>