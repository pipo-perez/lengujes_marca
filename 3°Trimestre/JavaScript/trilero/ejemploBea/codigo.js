// variables
let numAleatorios;
let reloj;
let imagenn="img";

function aleatorios(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);

}


// Carga menu principal/ 
window.onload = function cargaPrincipal(){
    // alert("hola");
    numAleatorios=aleatorios(1,4);
    reloj=document.getElementById('reloj');
    reloj.innerHTML=numAleatorios;
    DescubrirPelota(imagenn+numAleatorios);
}

// descubri pelota
function DescubrirPelota(posicion) {
    document.getElementById(posicion).src="pelota.jpeg"
}