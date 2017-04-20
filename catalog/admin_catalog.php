<?php
	include 'admin_db.php';

	$admin_db = new AdminDB();
	$request_type = $_SERVER['REQUEST_METHOD'];

	switch( $request_type ) {

		case 'POST':
			$name = $_POST['name'];
			$description = $_POST['description'];
			$category = $_POST['category'];
			$price = $_POST['price'];
			$data = array(
				'nombre' => $name,
				'descripcion' => $description,
				'categoria' => $category,
				'precio' => $price);
			$admin_db->insertar('productos', $data);
			break;

		case 'DELETE':
			$name = $_POST['name'];
			$data = array(
				'nombre' => $name
				);
			$admin_db->eliminar('productos', $data);
	}

?>