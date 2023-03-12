//contiene la operacion 0 (reslultado) 
let contenido = "";
//elemento donde se colocan la operacion que se esta realizando
let operRealizada = document. getElementById("operacionUno");
//elemento donde se coloca el resultado
let txtResul = document. getElementById("resultado");
//ultimo operado seleccionado
let operadorSeleccionado = "";
//numero que se va a ingresado
let numero = "";

//variable que se usa para determinar si lo ultimo numero presionada es un 0 
let ultimoDigito = "" ;

function operacion(digitosVarios) {
    
    numero = digitosVarios;

    ultimoDigito = "operacion";
    contenido = contenido + digitosVarios;
    // numero = 0;
    operRealizada.innerHTML = contenido;
}

// Llamar a los simbolos de la operación
function operar(distintasOperaciones) {
    
    numero = distintasOperaciones;
    ultimoDigito = "operar";

    contenido = contenido + distintasOperaciones;
    operRealizada.innerHTML = contenido;
}

// borrar
function limpiar() {
    numero = "";
    contenido = numero;

    operRealizada.innerHTML = numero;
}