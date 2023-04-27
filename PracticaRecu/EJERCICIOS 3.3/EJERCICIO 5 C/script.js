let cartonBingo=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let numerosUtilizados=[];
let numerosJugados=[];
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
	while(numeros>casillas){
		n=numeroAletorio(0,99);
		// Que sea false, implica que no esta
		if(!comprobarNumero(n,numerosUtilizados)){

			numerosUtilizados.push(n);
			casillas++;
		}
	}
}
function rellenarCelda(i,multiplicador,matriz,n,numerosColocar){
	elemento=document.getElementById((i*multiplicador+1).toString());
		if(matriz[i]!=-1){
			matriz[i]=numerosColocar[n];
			n++;
		}
		console.log(numerosColocar[n]);
		return n;
}
function colocarTablero(matriz){
	let numerosColocar=numerosUtilizados.sort((a, b) => a - b );
	let n=0,multiplicador;
	for(let i=0; i<9;i++){
		n=rellenarCelda(i,1,matriz,n,numerosColocar);
		n=rellenarCelda(i,10,matriz,n,numerosColocar);
		n=rellenarCelda(i,20,matriz,n,numerosColocar);
	}
	return matriz;
}

function visualizarTablero(matriz){
	let elemento,j;
	
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
	document.getElementById("numeros").innerHTML="<h1>"+numeroAletorio(0,99)+"</h1>";

}
function parar(){
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("comenzar").disabled = true;
	jugar=false;
}
function comenzar(){
	control = setInterval(numerosBingo,100);
	document.getElementById("comenzar").disabled = true;
	jugar=true;
}

function continuar(){
	document.getElementById("comenzar").disabled = true;
	comenzar();
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	jugar=true;
}
window.onload= function Carga(){

	generarCasillasGrises();
	generarNumeros();
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