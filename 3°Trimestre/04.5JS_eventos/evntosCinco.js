// evento 1
function validarFormu() {
    const campoNombre = document.getElementById("campoNombre").value;
    const campoApellido = document.getElementById("campoApellido").value;
    const campoComentario = document.getElementById("campoComentario").value;

    if (!campoNombre && !campoApellido && !campoComentario) {
        alert("Ingrese un nombre");
        // return false;
    }else if (!campoApellido) {
        alert("Ingrese un apellido");
        // return false;        
    }
    
    if (campoComentario < 50) {
        alert("Ingrese un comentario valido");
        // return false;        
    }else{
        alert("Campo obligatorio de 50 caracteres")
    }

    return true;

}
// evento 2
function contarVocales() {
    // Obtenemos la frase ingresada por el usuario
    var frase = document.getElementById("frase").value;
    
    // Convertimos la frase a minúsculas para simplificar la comparación
    frase = frase.toLowerCase();
    
    // Creamos un array vacío para almacenar las vocales encontradas
    var vocales = [];
    
    // Recorremos la frase en busca de vocales
    for (var i = 0; i < frase.length; i++) {
        var letra = frase.charAt(i);
        if ("aeiou".indexOf(letra) !== -1 && vocales.indexOf(letra) === -1) {
            vocales.push(letra);
        }
    }
    
    // Mostramos las vocales encontradas en la página
    var lista = document.getElementById("lista-vocales");
    lista.innerHTML = "";
    for (var i = 0; i < vocales.length; i++) {
        var li = document.createElement("li");
        li.textContent = vocales[i];
        lista.appendChild(li);
    }
}

// evento 3
function calcuMedia() {
    let nota1 = parseFloat(document.getElementById("nota1").value);
    let nota2 = parseFloat(document.getElementById("nota2").value);
    let nota3 = parseFloat(document.getElementById("nota3").value);

    let mediaFinn = (nota1+nota2+nota3) / 3;
    mediaFin= document.getElementById("mediaFin").innerHTML = mediaFinn;
    // mediaFin.innerHTML = "sas";
    // alert(mediaFin);
}

// evento 4
function salarioCalcu() {
    let salarioBruto = parseFloat(document.getElementById("salarioBruto").value);
    let neto = salarioBruto / 14;
    // alert(neto);
    impriResultSalario = document.getElementById('impriResultSalario').innerHTML = neto;
}

// evento 5
function multiTabla() {
    let tablaMult = parseFloat(document.getElementById("tablaMult").value);
    let mostrarTablaFinal = "";
    for (let i = 1; i < 11; i++) {
        // mostrarTablaFinal+ " " + tablaMult + "x" + i + "\n" + (tablaMult * i);
        mostrarTablaFinal += "" + tablaMult + " x " + i + " = " + (tablaMult * i) + "\n";
    }
    alert(mostrarTablaFinal);
    // tablaMultiplicarResult = document.getElementById('tablaMultiplicarResult').innerHTML = mostrarTablaFinal;
}