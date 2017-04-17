<?php
	include 'adminDB.php';

	if($_SERVER['REQUEST_METHOD'] === 'POST'){
		$name = $_POST['name'];
		$description = $_POST['description'];
		$category = $_POST['category'];
		$price = $_POST['price'];
		$data = array(
			'nombre' => $name,
			'descripcion' => $description,
			'categoria' => $category,
			'precio' => $price);
		$adminDB = new AdminDB();
		$adminDB->insertar('productos', $data);
	}

?>