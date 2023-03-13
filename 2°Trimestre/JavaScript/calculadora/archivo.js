// Variables globales
let numero1 = "";
let numero2 = "";
let resultadoNumeros = "";

// Funciones
function operacion(numero) {
  if (resultadoNumeros === "") {
    numero1 += numero;
    document.getElementById("operacionUno").innerHTML = numero1;
  } else {
    numero2 += numero;
    document.getElementById("operacionUno").innerHTML = numero1 + " " + resultadoNumeros + " " + numero2;
  }
}

function operar(i) {
  if (numero1 === "") {
    return;
  }

  if (numero2 !== "") {
    resultado();
  }

  resultadoNumeros = i;
  document.getElementById("operacionUno").innerHTML = numero1 + " " + resultadoNumeros;
}

function limpiar() {
  numero1 = "";
  numero2 = "";
  resultadoNumeros = "";
  document.getElementById("operacionUno").innerHTML = "0";
  document.getElementById("resultado").innerHTML = "";
}

function resultado() {
  let resultadoFinal = 0;

  switch (resultadoNumeros) {
    case "+":
      resultadoFinal = parseFloat(numero1) + parseFloat(numero2);
      break;
    case "-":
      resultadoFinal = parseFloat(numero1) - parseFloat(numero2);
      break;
    case "x":
      resultadoFinal = parseFloat(numero1) * parseFloat(numero2);
      break;
    case "÷":
      resultadoFinal = parseFloat(numero1) / parseFloat(numero2);
      break;
    default:
      return;
  }

  document.getElementById("operacionUno").innerHTML = numero1 + " " + resultadoNumeros + " " + numero2 + " =";
  document.getElementById("resultado").innerHTML = resultadoFinal;
  numero1 = res.toString();
  numero2 = "";
  resultadoNumeros = "";
}
