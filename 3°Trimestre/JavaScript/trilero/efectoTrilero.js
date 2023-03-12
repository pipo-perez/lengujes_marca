function botonTrilero(index) {
    alert("Tienes un intento, elige bien");

    // variables
    let variosBasos = document.querySelectorAll('.botonesVarios');
    let mensajeFinal = document.getElementById('mensajeFinal');
    let vasoJuegos = Math.floor(Math.random()+variosBasos.length); 

    // programa
    // condicion mensaje gana/pierda
    if (index == variosBasos) {
        mensajeFinal.innerHTML = "FELICIDADES, HAS ACERTADO";
    } else {
        mensajeFinal.innerHTML = "Ohhhh, esa no era";        
    }
}