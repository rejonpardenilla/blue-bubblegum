//Option buttons
const addProductButton = document.getElementById('addProductButton')
const editProductButton = document.getElementById('editProductButton')
const removeProductButton = document.getElementById('removeProductButton')

const formPanel = document.getElementById('formPanel')
var currentPanel = 'nothing'

addProductButton.addEventListener('click', generateAddProductPanel)
editProductButton.addEventListener('click', generateSearchProductPanel)
removeProductButton.addEventListener('click', generateRemoveProductPanel)

function generateAddProductPanel () {
	if (currentPanel != 'addProduct') {
		formPanel.removeChild(formPanel.childNodes[0])

		formCode = '<form action="admin_catalog.php" method="POST">Nombre: <input type="text" name="name"><br><br>' +
			'Descripción: <input type="text" name="description"><br><br>' +
			'Categoría: <select name="category">' +
			'<option value="devs">Developers</option>' +
			'<option value="comics">Comics and mangas</option>"' +
			'<option value="movies">Movies</option>' +
			'<option value="other">Other</option>' +
			'</select><br><br>' +
			'Precio: <input type="text" name="price"><br><br>' +
			'<input type="submit" value="Agregar"></form>'
	
		panelTemplate = document.createElement('div')
		panelTemplate.innerHTML = formCode

		formPanel.appendChild(panelTemplate)
		currentPanel = 'addProduct'
	}
}

function generateSearchProductPanel () {
	if (currentPanel != 'searchProduct') {
		formPanel.removeChild(formPanel.childNodes[0])

		formCode = '<form action="admin_catalog.php" method="GET">' +
		'Nombre de la etiqueta a editar: <input type="text" name="name">' +
		'<input type="submit" value="Buscar"></form>'
		currentPanel = 'searchProduct'
	}
}

function generateEditProductPanel () {
	if (currentPanel != 'editProduct') {
		formPanel.removeChild(formPanel.childNodes[0])

		formCode = '<form action="admin_catalog.php" method="PUT">' +
			'Nombre: <input type="text" name="name"><br><br>' +
			'Descripción: <input type="text" name="description"><br><br>' +
			'Categoría <select name="category">' +
			'<option value="devs">Developers</option>' +
			'<option value="comics">Comics and mangas</option>"' +
			'<option value="movies">Movies</option>' +
			'<option value="other">Other</option>' +
			'</select><br><br>' +
			'Precio: <input type="text" name="price"><br><br>' +
			'<input type="submit" value="Editar"></form>'

		panelTemplate = document.createElement("div")
		panelTemplate.innerHTML = formCode

		formPanel.appendChild(panelTemplate)
		currentPanel = 'editProduct'
	}
}

function generateRemoveProductPanel () {
	if (currentPanel != 'removeProduct') {
		formPanel.removeChild(formPanel.childNodes[0])
		
		formCode = '<form action="admin_catalog.php" method="DELETE">' +
		'Nombre de la etiqueta a eliminar: <input type="text" id="nameText"><br><br>' +
		'<input type="submit" value="Eliminar"></form>'

		panelTemplate = document.createElement("div")
		panelTemplate.innerHTML = formCode

		formPanel.appendChild(panelTemplate)
		currentPanel = 'removeProduct'
	}
}

/*
---Forms---

Add
	-name
	-image*/