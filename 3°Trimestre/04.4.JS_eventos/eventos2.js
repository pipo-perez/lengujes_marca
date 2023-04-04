// evento 1
function resulFotos(event) {
    let respuestaCorrecta = "hambster";
    let respuestaUsuario = document.getElementById("entrada").value;

  if (event.keyCode === 13) {

    // Verifica si es correcta o no
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta) {
      document.getElementById("resultado").innerHTML = "¡Correcto!";
    } else {
      document.getElementById("resultado").innerHTML = "Incorrecto, intenta de nuevo.";
    }
  }
}

// evento 4
// variables evento 4
let numEvento4;

// carga menu principal
window.onload = function foto_Img(){
    numEvento4=aleatoriosEvento4(1,6);
}

// randomizando numeros
function aleatoriosEvento4(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);
}