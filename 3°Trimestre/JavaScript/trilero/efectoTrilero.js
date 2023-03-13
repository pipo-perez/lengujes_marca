// function botonTrilero(index) {
//     // alert("Tienes un intento, elige bien");

//     // variables
//     var variosVasos = ["vaso1", "vaso2", "vaso3", "vaso4"];
//     var vasoJuegos = Math.floor(Math.random()*variosVasos); 

//     // programa
//     // condicion mensaje gana/pierda
//     if (variosVasos[vasoJuegos] === "vaso1") {
//         mensajeFinal.innerHTML = "FELICIDADES, HAS ACERTADO";
//     } else {
//         mensajeFinal.innerHTML = "Ohhhh, esa no era";        
//     }

// }
// function botonTrilero(index) {
//     // alert("Tienes un intento, elige bien");

//     // Generar número aleatorio entre 0 y 3 (posición de la pelota)
//     var numAleatorio = Math.floor(Math.random() * 4);
  
//     // Comprobar si la posición pulsada coincide con la posición de la pelota
//     if (index == numAleatorio) {
//       // Mostrar mensaje de felicitación
//       document.getElementById("mensajeFinal").innerHTML = "¡Felicidades, has acertado!";
//     } else {
//       // Mostrar mensaje indicando la posición de la pelota
//       document.getElementById("mensajeFinal").innerHTML = "Lo siento, la pelota estaba en la posición " + (numAleatorio + 1) + ".";
//     }
//   }

function botonTrilero(numeroVaso) {
    var vasos = document.querySelectorAll('.botonesVarios');
    var mensajeFinal = document.getElementById('mensajeFinal');
    var vasoCorrecto = Math.floor(Math.random() * vasos.length);

    if (numeroVaso === vasoCorrecto) {
        mensajeFinal.innerHTML = '¡Felicidades! Adivinaste correctamente.';
        // vasos[numeroVaso].innerHTML = '<img class="fotoVaso" src="vasoConPelota.png" alt="">';
        for (var i = 0; i < vasos.length; i++) {
            if (i !== numeroVaso) {
                vasos[i].setAttribute('disabled', 'true');
            }
        }
    } else {
        mensajeFinal.innerHTML = 'Lo siento, la pelota estaba en el vaso ' + (vasoCorrecto + 1) + '.';
        // vasos[vasoCorrecto].innerHTML = '<img class="fotoVaso" src="vasoConPelota.png" alt="">';
        for (var i = 0; i < vasos.length; i++) {
            vasos[i].setAttribute('disabled', 'true');
        }
    }
}
