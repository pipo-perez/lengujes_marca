let imagen="img";
let numero;
let tiempo=10;

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
function DescubrirPelota(imagen){
  document.getElementById(imagen).src="pelota.jpeg";
}
function Iniciar(){
  document.getElementById("img1").src="vaso.jpg";
  document.getElementById("img2").src="vaso.jpg";
  document.getElementById("img3").src="vaso.jpg";
  document.getElementById("img4").src="vaso.jpg";
}
function CubrirPelota(imagen){
  document.getElementById(imagen).src="vaso.jpg";
}
function cuentAtras (){
    if(tiempo >=  0){
    document.getElementById("reloj").innerHTML=tiempo;
    tiempo--;
  }
  else
    document.getElementById("reloj").innerHTML="SE TE HA AGOTADO EL TIEMPO";
}
function EstaAqui(numeroPos){
  if(numeroPos==numero){
    DescubrirPelota(imagen+numero);
    alert("Has ganado");
  }
  else
    alert('Has fallado');
}

window.onload = function Carga(){

  numero=random(1,4);
  DescubrirPelota(imagen+numero);
  setTimeout(Iniciar,1000);
  numero=random(1,4);
  setInterval(cuentAtras,1000);
}