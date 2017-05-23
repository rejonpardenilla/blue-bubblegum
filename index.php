<?php
  session_start();


  if ( $_SESSION['BBl_tipoUsuario'] == 'admin' ){
    # code...
    echo "<script>window.location.href = 'adminCatalog'</script>";
  } else {

    echo "<script>window.location.href = 'shop'</script>";
  }

 ?>
