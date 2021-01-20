
/* const formulario  = document.getElementsByTagName('form');
const nombre = document.getElementById('nombre');
const nombreError = document.querySelector('#nombre + span.error');

nombre.addEventListener('input', function (event) {
    // Cada vez que el usuario escribe algo, verificamos si
    // los campos del formulario son válidos.

    if (nombre.validity.valid) {
      // En caso de que haya un mensaje de error visible, si el campo
      // es válido, eliminamos el mensaje de error.
      nombreError.innerHTML = ''; // Restablece el contenido del mensaje
      nombreError.className = 'error'; // Restablece el estado visual del mensaje
    } else {
      // Si todavía hay un error, muestra el error exacto
        muestraError();
    }
});

formulario.addEventListener('submit', function (event) {
    // si el campo de correo electrónico es válido, dejamos que el formulario se envíe

    if(!nombre.validity.valid) {
      // Si no es así, mostramos un mensaje de error apropiado
        muestraError();
      // Luego evitamos que se envíe el formulario cancelando el evento
        event.preventDefault();
    }
});

function muestraError() {
    if(nombre.validity.valueMissing) {
      // Si el campo está vacío
      // muestra el mensaje de error siguiente.
        nombreError.textContent = 'Debe ingresar un nombre.';
    } else if(nombre.validity.typeMismatch) {
      // Si el campo no contiene una dirección de correo electrónico
      // muestra el mensaje de error siguiente.
        nombreError.textContent = 'El valor introducido debe contener solo letras.';
        // Establece el estilo apropiado
    nombreError.className = 'error activo';
} */

var tabla = [];

window.onload = cargarEventos;

function cargarEventos(){
    
    document.getElementById("nuevo-usuario").addEventListener("submit", nuevoUsuario, false);
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    
    
}

function mostrarTabla() {
    /* e.preventDefault(); */
    
    var cuerpoTabla = document.getElementById("tabla-datos");
    var tablaCompleta = "";

    for (var i=0; i < tabla.length; i++ ) {
        tablaCompleta += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + "</td></tr>";

    }
        cuerpoTabla.innerHTML = tablaCompleta;
    }

    function nuevoUsuario(e) {
        e.preventDefault();

        var nombreIntroducido = document.getElementById("nombre").value;
        var edadIntroducida = document.getElementById("edad").value;
        var nuevoUsuario = { nombre: nombreIntroducido, edad: edadIntroducida };
        tabla.push(nuevoUsuario)

        document.getElementById("nombre").value = "";
        document.getElementById("edad").value = "";

    }
    
