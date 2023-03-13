function botonTrilero(numeroVaso) {
    var vasos = document.querySelectorAll('.botonesVarios');
    var mensajeFinal = document.getElementById('mensajeFinal');
    var vasoCorrecto = Math.floor(Math.random() * vasos.length);

    if (numeroVaso == vasoCorrecto) {
        mensajeFinal.innerHTML = '¡Felicidades! Adivinaste correctamente.';
        
    } else {
        mensajeFinal.innerHTML = 'Lo siento, la pelota estaba en el vaso ' + (vasoCorrecto + 1) + '.';
        vasos[vasoCorrecto].innerHTML = 'Elige otra opcion'+'<img class="fotoVaso" src="vaso.png" alt="">';
        for (var i = 0; i < vasoCorrecto.length; i++) {
            location.reload();
        }
       
    }

}
