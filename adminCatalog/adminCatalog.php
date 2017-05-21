<?php
	include '../adminDB/adminDB.php';

	$adminDB = new AdminDB();
	$request_type = $_SERVER['REQUEST_METHOD'];

	switch( $request_type ) {

		case 'GET':
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

				case 'comics':
					$category = [
						'category' => 'comics'
					];
					$products = $adminDB->obtener_informacion('products', $category);
				break;

				case 'movies':
					$category = [
						'category' => 'movies'
					];
					$products = $adminDB->obtener_informacion('products', $category);
				break;
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