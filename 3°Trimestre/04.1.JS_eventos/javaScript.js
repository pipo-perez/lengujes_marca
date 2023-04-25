// evento 1
function sumaEvento1() {
    let numeorUno = parseFloat(document.getElementById("numeorUno").value);
    let numeorDos = parseFloat(document.getElementById("numeorDos").value);

    let resultadoOperacion = numeorUno + numeorDos;
    // alert(resultadoOperacion);
    imprimirResult = document.getElementById("imprimirResult").innerHTML = resultadoOperacion;
    // document.write(resultadoOperacion);
}   

// evento 2
function sumaEvento2() {
    let numeorUno = parseFloat(document.getElementById("numUnoEventoDos").value);
    let numeorDos = parseFloat(document.getElementById("numDosEventoDos").value);

    let resultadoOperacion = numeorUno * numeorDos;
    imprimirMulti = document.getElementById("imprimirMulti").innerHTML = resultadoOperacion;
}

// evento 3
function sumaEvento3() {
    let variasOpcionesUno = parseFloat(document.getElementById("variasOpcionesUno").value);
    let variasOpcionesDos = parseFloat(document.getElementById("variasOpcionesDos").value);
    let resultadoEvent3;

    switch (document.getElementById("operacionesDistintas").value) {
        case "sumita":
            resultadoEvent3 = variasOpcionesUno + variasOpcionesDos;
            imprimirMulti = document.getElementById("imprimirMultii").innerHTML = resultadoEvent3;
            break;
        case "resta":
            resultadoEvent3 = variasOpcionesUno - variasOpcionesDos;
            imprimirMulti = document.getElementById("imprimirMultii").innerHTML = resultadoEvent3;
            break;
        case "multi":
            resultadoEvent3 = variasOpcionesUno * variasOpcionesDos;
            imprimirMulti = document.getElementById("imprimirMultii").innerHTML = resultadoEvent3;
            break;
        default:
            break;
    }


}