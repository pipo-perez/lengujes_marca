let cartonBingo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let numerosUtilizados=[];
let numerosJugados=[];
let numerosGanadores=[];
const casillaGris=-1;
const MaxCasillas=24;
const colorGris="#808080";
const colorAzul="#92c5fc";
let control;
let jugar=false;
// En el bingo hay 8x3 casillas pero 15 son con números pero el resto son grises o con un icono
// -1 Casilla Gris

function numeroAletorio(min, max) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
function cambiaFondo(celda,color){
	celda.style.backgroundColor=color;
}
function generarCasillasGrises(){
let grises=9, casillas=0,n;

	while(casillas<grises){
		n=numeroAletorio(0,23);
		if(cartonBingo[n]!=casillaGris){
			cartonBingo[n]=-1;
			casillas++;
		}		
	}
}
function mostrarVector(vector){
	console.log("Longitud es:",vector.length);
	for(let i=0;i<vector.length;i++){
		console.log(vector[i]);
	}	
}
function comprobarNumero(numero,vector){
esta=true;

	for(let i=0;i<vector.length;i++){
		if(vector[i]==numero){
			esta=true;
		}
	}
	return false;
}
function generarNumeros(){
let numeros=15, casillas=0,n;
	while(numeros>=casillas){
		n=numeroAletorio(3,99);
		// Que sea false, implica que no esta
		if(!comprobarNumero(n,numerosUtilizados)){
			console.log("numeros utilizados"+n);
			numerosUtilizados.push(n);
			casillas++;
		}
	}
}
function colocarTablero(matriz){
	let numerosColocar=numerosUtilizados.sort((a, b) => a - b );
	let n=0;
	for(let i=0; i<MaxCasillas;i++){
		elemento=document.getElementById((i+1).toString());
		if(matriz[i]!=-1){
			matriz[i]=numerosColocar[n];
			n++;
		}
	}
	return matriz;
}
function visualizarTablero(matriz){
	let elemento;
	
	for(let i=0; i<MaxCasillas;i++){
		elemento=document.getElementById((i+1).toString());
		if(matriz[i]==-1){
			cambiaFondo(elemento,colorGris);
			elemento.innerHTML="";
		}
		else
			elemento.innerHTML=matriz[i];
	}
}
function marcarCasillas(id){
let celda=document.getElementById(id);

	if(jugar){
		cambiaFondo(celda,colorAzul);
		numerosJugados.push(cartonBingo[id]);
	}
}
function numerosBingo(){
	let numero=numeroAletorio(0,99);
	numerosGanadores.push(numero);
	document.getElementById("numeros").innerHTML="<h1>"+numero+"</h1>";

}
function parar(){
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("comenzar").disabled = true;
	document.getElementById("continuar").disabled = false;
	jugar=false;
}
function comenzar(){
	control = setInterval(numerosBingo,1000);
	document.getElementById("comenzar").disabled = true;
	document.getElementById("continuar").disabled = true;
	jugar=true;
}

function continuar(){
	document.getElementById("comenzar").disabled = true;
	comenzar();
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	jugar=true;
}
function comprobarBingo(){
	let ganar=true,i;
	alert("compruebo bingo");
	while((ganar)&&(i<numerosJugados.length)){
		if(!numerosGanadores.includes(numerosJugados[i]))
			ganar=false;
		i++;
	}
	if(ganar){
		alert("Has ganado");
		alert(numerosGanadores);
	}
	else
		alert("No has ganado");

}
window.onload= function Carga(){

	generarCasillasGrises();
	generarNumeros(numerosJugados);
	cartonBingo=colocarTablero(cartonBingo);
	visualizarTablero(cartonBingo);
	
}


/*function presion2() {
            alert('se hizo doble click');
        }*/

//document.getElementById('1').addEventListener('dblclick', presion2);


/*window.addEventListener("load", function(event) {
    console.log("'Todos los recursos terminaron de cargar!");
});*/