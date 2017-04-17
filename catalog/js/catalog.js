//Option buttons
const addProductButton = document.getElementById('addProductButton')
const editProductButton = document.getElementById('editProductButton')
const removeProductButton = document.getElementById('removeProductButton')

const formPanel = document.getElementById('formPanel')
var currentPanel = 'nothing'

addProductButton.addEventListener('click', generateAddProductPanel)
editProductButton.addEventListener('click', generateEditProductPanel)
removeProductButton.addEventListener('click', generateRemoveProductPanel)

function generateAddProductPanel () {
	if (currentPanel != 'addProduct') {
		formPanel.removeChild(formPanel.childNodes[0])

		formCode = '<form action="adminCatalog.php" method="POST">Nombre: <input type="text" name="name"><br><br>' +
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

function generateEditProductPanel () {
	if (currentPanel != 'editProduct') {
		formPanel.removeChild(formPanel.childNodes[0])

		formCode = '<form>Nombre de la etiqueta a editar: <input type="text" id="nameText"><br><br>'
		formCode = formCode + '<input type="submit" value="Buscar"></form>'

		panelTemplate = document.createElement("div")
		panelTemplate.innerHTML = formCode

		formPanel.appendChild(panelTemplate)
		currentPanel = 'editProduct'
	}
}

function generateRemoveProductPanel () {
	if (currentPanel != 'removeProduct') {
		formPanel.removeChild(formPanel.childNodes[0])
		
		formCode = '<form>Nombre de la etiqueta a eliminar: <input type="text" id="nameText"><br><br>'
		formCode = formCode + '<input type="submit" value="Eliminar"</form>'

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