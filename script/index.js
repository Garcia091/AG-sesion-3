let nombre = "";
let apellido = "";
let telefono = "";
let edad = "";
let direccion = ""

//Capturar datos desde el html
let form = document.querySelector('#formulario')
let boton = document.querySelector('#btnEnviar')
let lista = document.querySelector('#listar')

function capturarDatos() {
    nombre = document.getElementById('nombre').value
    apellido = document.querySelector('#apellido').value
    telefono = document.querySelector('#telefono').value
    edad = document.querySelector('#edad').value
    direccion = document.querySelector('#direccion').value
    console.log('Estoy capturando tado')
    guardarLocalStorage(nombre, apellido, telefono, edad, direccion)
}


document.addEventListener('DOMContentLoaded',ListarDatos)

//Prevenir el evento submit
form.addEventListener('submit', formSubmit)

function formSubmit(e) {
    console.log(e);
    e.preventDefault()
}

//evento click
boton.addEventListener('click', capturarDatos)

//Almacenar LocalStorage

function guardarLocalStorage(nom, ape, tel, edad, dir) {
    localStorage.setItem('Nombre', nom)
    localStorage.setItem('Apellido', ape)
    localStorage.setItem('Telefono', tel)
    localStorage.setItem('Edad', edad)
    localStorage.setItem('Direccion', dir)
    ListarDatos()
}

function ListarDatos() {
    let nombre = localStorage.getItem('Nombre')
    let apellido = localStorage.getItem('Apellido')
    let telefono = localStorage.getItem('Telefono')
    let edad = localStorage.getItem('Edad')
    let direccion = localStorage.getItem('Direccion')

    lista.innerHTML = `
    <table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Teléfono</th>
                <th>Edad</th>
                <th>Dirección</th>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>T${telefono}</td>
            <td>${edad}</td>
            <td>${direccion}</td>
        </tr>
        </tbody>
    </table>
    `
}


