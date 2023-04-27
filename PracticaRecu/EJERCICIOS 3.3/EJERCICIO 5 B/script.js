let cartonBingo=[
									[0,0,0,0,0,0,0,0,0],
									[0,0,0,0,0,0,0,0,0],
									[0,0,0,0,0,0,0,0,0]
								];
let numerosUtilizados=[];
let numerosJugados=[];
const casillaGris=-1;
const MaxCasillas=8;
const MaxFilas=3;
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
function visualizarCarton(){
	for(i=0;i<cartonBingo.length;i++){
		for(j=0;j<cartonBingo[i].length;j++){
			console.log("Posicion "+i+" "+j+"valor: "+cartonBingo[i][j]);
		}
	}
}
function generarCasillasGrises(){
let grises=12, casillas=0, x,y;

	while(casillas<grises){
		x=numeroAletorio(0,2);
		y=numeroAletorio(0,8);
		
		if(cartonBingo[x][y]!=casillaGris){
			cartonBingo[x][y]=-1;
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
		n=numeroAletorio(0,99);
		// Que sea false, implica que no esta
		if(!comprobarNumero(n,numerosUtilizados)){

			numerosUtilizados.push(n);
			casillas++;
		}
	}
}
function colocarTablero(matriz){
	let numerosColocar=numerosUtilizados.sort((a, b) => a - b );
	let n=0;
		for(let i=0;i<MaxCasillas;i++){
			for(let j=0;j<3;j++){
					//console.log("matriz"+matriz[j][i]+"Posicion ij "+j+i);
					//console.log("Valor de la i "+i+"valor de la j "+j);
					if(matriz[j][i]!=-1){
						matriz[j][i]=numerosColocar[n];
						//console.log("matriz"+matriz[j][i]+"Posicion ij "+j+i+"valor de n"+n);
						n++;
					}
			}
		}
	return matriz;
}
/*function visualizarTablero(matriz){
	let elemento,posicion,x,y;

	for(i=0;i<cartonBingo.length;i++){
		for(j=0;j<cartonBingo[i].length;j++){
					//console.log("Valor de la i "+i+"valor de la j "+j);
					x=i+1;
					y=j+1;
					posicion=x.toString()+y.toString();
					elemento=document.getElementById(posicion);
					/*if(matriz[i][j]!=-1){
						cambiaFondo(elemento,colorGris);
						elemento.innerHTML="";
					}else
						elemento.innerHTML=matriz[i][j];
			}
		}
}*/

function visualizarTablero(matriz){
let elemento,posicion,x,y;

for(i=0;i<matriz.length;i++){
		for(j=0;j<matriz[i].length;j++){
			console.log("Tablero "+i+" "+j+"valor: "+matriz[i][j]);
			x=i+1;
			y=j+1;
			posicion=x.toString()+y.toString();
			console.log(posicion);
			elemento=document.getElementById(posicion);
			if(matriz[i][j]==-1){
				cambiaFondo(elemento,colorGris);
				elemento.innerHTML="";
			}else
			 	elemento.innerHTML=matriz[i][j];
			
		}
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
	visualizarCarton();
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