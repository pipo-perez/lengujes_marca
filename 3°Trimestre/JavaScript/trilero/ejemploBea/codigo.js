// variables
let numAleatorios;
let reloj;
let tiempo=10;
let imagen="img";

function aleatorios(min,max){
    return Math.floor((Math.random()*(max-min+1))+min);

}

// Carga menu principal/ 
window.onload = function cargaPrincipal(){
    numAleatorios=aleatorios(1,4);
    reloj=document.getElementById('reloj');
    // reloj.innerHTML=numAleatorios;
    DescubrirPelota(imagen+numAleatorios);
    setTimeout(CubrirPelota,100);
    numAleatorios=aleatorios(1,4);
    setInterval(cuentaAtras,1000);
}

// descubrir pelota
function DescubrirPelota(posicion) {
    document.getElementById(posicion).src="pelota.jpeg"
}

// cubrir pelota
function CubrirPelota() {
    document.getElementById('img1').src="vaso.jpg"
    document.getElementById('img2').src="vaso.jpg"
    document.getElementById('img3').src="vaso.jpg"
    document.getElementById('img4').src="vaso.jpg"
}

// funcion ganar perder
function EstaAqui(numPos){
    if(numPos==numAleatorios){
        DescubrirPelota(imagen+numAleatorios);
        alert("Has ganado");
        location.reload();
    }else{
        alert("Has Perdido que penita");
        location.reload();
    }
}

// cuenta atras
function cuentaAtras(){
    if (tiempo>=0) {
        document.getElementById('reloj').innerHTML=tiempo;
        tiempo--;
    }else{
        document.getElementById('reloj').innerHTML="Se ha acabado el tiempo";
        location.reload();
    }

}