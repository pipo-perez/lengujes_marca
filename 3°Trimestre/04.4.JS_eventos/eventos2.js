// evento 2
function resulFotos(event) {
    let respuestaCorrecta = "hamster";
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

// evento 3
function parejas() {
  //Variables 
  let respuUno = "Hamster";
  let respuDos = "Seis";
  let respuTres = "Cinco";

  // Asignacion de variables
  pEvent = document.getElementById("pEvent").innerHTML = respuUno;
  pEventDos = document.getElementById("pEventDos").innerHTML = respuDos;
  pEventTres = document.getElementById("pEventTres").innerHTML = respuTres;

  if (respuUno === pEvent && respuDos === pEventDos && respuTres === pEventTres) {
    alert("Pareja encontrada");
  }else{
    alert("Casilla incorrecta");
  }

}

function resetearEventoTres() {
  pEvent = document.getElementById("pEvent").innerHTML = "Roedor";
  pEventDos = document.getElementById("pEventDos").innerHTML = "Numero grande";
  pEventTres = document.getElementById("pEventTres").innerHTML = "Numero pequeño";


}

// evento 4
// variables evento 4
// let numEvento4;

// // carga menu principal
// window.onload = function foto_Img(){
//   numEvento4=aleatoriosEvento4(1,6);
// }

// // randomizando numeros
// function aleatoriosEvento4(min,max){
//   return Math.floor((Math.random()*(max-min+1))+min);
// }
let carta1 = null;
let carta2 = null;

function seleccionarCarta(carta) {
  if (carta1 == null) {
    carta1 = carta;
    carta.src = carta.src.replace(".jpg", ".png");
  } else if (carta2 == null) {
    carta2 = carta;
    carta.src = carta.src.replace(".jpg", ".png");
    if (carta1.src == carta2.src) {
      carta1 = null;
      carta2 = null;
      alert("¡Enhorabuena! Has encontrado una pareja.");
    } else {
      setTimeout(function() {
        carta1.src = carta1.src.replace(".png", ".jpg");
        carta2.src = carta2.src.replace(".png", ".jpg");
        carta1 = null;
        carta2 = null;
      }, 1000);
    }
  }
}

// evento 5

let jugador = "X";
let tablero = ["", "", "", "", "", "", "", "", ""];

function marcarCasilla(casilla) {
    if (casilla.innerHTML !== "") {
        alert("Esta casilla ya está marcada, por favor selecciona otra.");
        return;
    }
    
    casilla.innerHTML = jugador;
    tablero[casilla.id] = jugador;

    if (comprobarVictoria()) {
        alert("¡El jugador " + jugador + " ha ganado!");
        reiniciar();
        return;
    }

    if (comprobarEmpate()) {
        alert("¡Empate!");
        reiniciar();
        return;
    }

    jugador = (jugador === "X") ? "O" : "X";
}

function comprobarVictoria() {
    let victoria = false;

    // Comprobar filas
    for (let i = 0; i < 9; i += 3) {
        if (tablero[i] === jugador && tablero[i+1] === jugador && tablero[i+2] === jugador) {
            victoria = true;
            break;
        }
    }

    // Comprobar columnas
    for (let i = 0; i < 3; i++) {
        if (tablero[i] === jugador && tablero[i+3] === jugador && tablero[i+6] === jugador) {
            victoria = true;
            break;
        }
    }

    // Comprobar diagonales
    if ((tablero[0] === jugador && tablero[4] === jugador && tablero[8] === jugador) ||
        (tablero[2] === jugador && tablero[4] === jugador && tablero[6] === jugador)) {
        victoria = true;
    }

    return victoria;
}

function comprobarEmpate() {
    return !tablero.includes("");
}

// const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click', resetGame);

function resetGame() {
  // Código para reiniciar el juego
  console.log('Juego reiniciado');
}
