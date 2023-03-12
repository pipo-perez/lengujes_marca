function botonTrilero() {
    alert("Tienes un intento, elige bien");

    // variables
    let variosBasos = document.querySelectorAll('.botonesVarios');
    let mensajeFinal = document.getElementById('mensajeFinal');
    let vasoJuegos = Math.floor(Math.random()+variosBasos.length); 

    // programa
    
}




// var cups = document.querySelectorAll('.cup');
// var message = document.getElementById('message');
// var correctCup = Math.floor(Math.random() * cups.length);

// function guess(index) {
// 	if (index == correctCup) {
// 		cups[index].classList.add('clicked');
// 		message.innerHTML = '¡Felicidades! Adivinaste correctamente.';
// 	} else {
// 		cups[correctCup].classList.add('clicked');
// 		message.innerHTML = 'Lo siento, la pelota estaba en el vaso ' + (correctCup + 1) + '.';
// 	}
// 	for (var i = 0; i < cups.length; i++) {
// 		cups[i].removeAttribute('onclick');
// 	}
// }
