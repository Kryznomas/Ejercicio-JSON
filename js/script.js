var tabla = [
    { nombre: "Kryz", edad: 35 },
    { nombre: "Manuel", edad: 36 },
    { nombre: "Fernanda", edad: 22 },
    { nombre: "Alejandra", edad: 22 }
];

/* window.onload = cargarEventos; */

function cargarEventos(){
    
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla, false);
    document.getElementById("nuevo-usuario").addEventListener("submit", nuevoUsuario, false)
}

function mostrarTabla() {
    
    var cuerpoTabla = document.getElementById("tabla-datos");
    var tablaCompleta = "";

    for (var i=0; i < tabla.lenght; i++ ) {
        tablaCompleta += "<tr><td>" + tabla[i].nombre + "</td><td>" + tabla[i].edad + "</td></tr>";

    }
        cuerpoTabla.innerHTML = tablaCompleta;
    }

    function nuevoUsuario(e){
        e.preventDefault();

        var nombreIntroducido = element.getElementById("nombre").value;
        var edadIntroducida = element.getElementById("edad").value;
        var nuevoUsuario = { nombre: nombreIntroducido, edad: edadIntroducida};
        tabla.push(nuevoUsuario);

    }
    
