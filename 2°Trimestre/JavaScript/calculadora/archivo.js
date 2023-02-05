//contiene la operacion 0 reslultado parcial
let parcial = "";
//elemento donde se colocan la operacion que se esta realizando
let operRealizada = document. getElementById("operacionUno");
//elemento donde se coloca el resultado
let txtResul = document. getElementById("resultado");
//ultimo operado seleccionado
let operadorSeleccionado = "";
//numero ingresado
let numero = "";

//para determinar si lo ultimo presionada es un numero 0 una
let ultimoDigito = "" ;

function operador(num){

    numero = numero + num;

    parcial = parcial + num;

    if (numero =='0' && operadorSeleccionado == '/') {
        limpiar();
        txtResul.innerHTML = "Indefinido";
        return;
    }

    if (ultimoDigito == 'operacion') {
        ultimoDigito = 'numero'
    }
}

function limpiar() {
    
}

function operacion(oper) {
    
    operadorSeleccionado = oper;

    ultimoDigito = "operacion";
    parcial = parcial + oper;
    numero = 0;
    operRealizada.innerHTML = parcial;
}