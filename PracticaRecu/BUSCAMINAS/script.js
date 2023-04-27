let matriz = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let posicion;
let i,j;
let numero_bombas=2;

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function visualizar_matriz(){
	
	for (x=0;x<matriz.length;x++) {
	    for (y=0;y<matriz[x].length;y++) {
	    	i=x+1;
	    	j=y+1;
	    	posicion=i.toString()+j.toString();
	    	document.getElementById(posicion).innerHTML=matriz[x][y];
	    }
	}
}
 function hay_bomba(i,j){
 		if(matriz[i,j]!="B")
 			return true;
 		else
 			return false;
 }

function rellenar_tablero(i,j){
//Hay que comprobar que no hay una bomba	
	//Arriba
	if(((i-1)>=0)&& hay_bomba(i-1,j))
		matriz[i-1][j]=matriz[i-1][j]+1;
	//Abajo
	if(((i+1)<5)&& hay_bomba(i-1,j))
		matriz[i+1][j]=matriz[i+1][j]+1;
	//derecha
	if(((j+1)<5)&& hay_bomba(i-1,j))
		matriz[i][j+1]=matriz[i][j+1]+1;
	//izquierda
	if(((j-1)>=0)&& hay_bomba(i-1,j))
		matriz[i][j-1]=matriz[i][j-1]+1;
	//Diagonales
	//Diagonal superior izquierda
	if((((i-1)>=0) && ((j-1)>=0))&& hay_bomba(i-1,j))
		matriz[i-1][j-1]=matriz[i-1][j-1]+1;
	//Diagonal superior derecha
	if((((i-1)>=0) && ((j+1)<5))&& hay_bomba(i-1,j))
		matriz[i-1][j+1]=matriz[i-1][j+1]+1;
	//Diagonal inferior izquierda
	if((((i+1)<5) && ((j-1)>=0))&& hay_bomba(i-1,j))
		matriz[i+1][j-1]=matriz[i+1][j-1]+1;
	//Diagonal inferior derecha
	if((((i+1)<5) && ((j+1)<5))&& hay_bomba(i-1,j))
		matriz[i+1][j+1]=matriz[i+1][j+1]+1;

}

function generar_bombas(bombas){
	let a,b;
	a=random(0,4);
	b=random(0,4);
	matriz[a][b]="B";
	rellenar_tablero(a,b);
	//visualizar_matriz();
}
function DescubrirCasilla(a,b){
  let posicion=a+""+b;
  
	if(matriz[a][b]=="B"){
		alert("Has perdido");
	}
	document.getElementById(posicion).innerHTML=matriz[a][b];
	
}
window.onload = function Carga(){
	let i;
  //visualizar_matriz();
  for (i=0;i<numero_bombas; i++)
  	//Hay que reiniciar la semilla
  	generar_bombas(i);

}



