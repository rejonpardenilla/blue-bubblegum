<?php
	include '../adminDB/adminDB.php';

	$adminDB = new AdminDB();
	$request_type = $_SERVER['REQUEST_METHOD'];

	switch( $request_type ) {

		case 'GET':
			if (isset($_GET['category'])) {
				$category = $_GET['category'];
				switch($category){

					case 'all':
						$products = $adminDB->obtener_informacion('products', null);
						break;

					case 'technology':
						$category = [
							'category' => 'technology'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;

					case 'comics-manga':
						$category = [
							'category' => 'comics-manga'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;

					case 'movies':
						$category = [
							'category' => 'movies'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;

					case 'others':
						$category = [
							'category' => 'others'
						];
						$products = $adminDB->obtener_informacion('products', $category);
						break;
				}
			} else {
				$title = [
					'title' => $_GET['title']
				];
				$product = $adminDB->obtener_informacion('products', $title);
			}
			break;

		case 'POST':
			$title = $_POST['title'];
			$description = $_POST['description'];
			$category = $_POST['category'];
			$price = $_POST['price'];
			$data = array(
				'title' => $title,
				'description' => $description,
				'category' => $category,
				'price' => $price);
			$adminDB->insertar('products', $data);
			break;

		case 'DELETE':
			$title = $_POST['title'];
			$data = array(
				'title' => $title
				);
			$adminDB->eliminar('products', $data);
			break;
	}

?>