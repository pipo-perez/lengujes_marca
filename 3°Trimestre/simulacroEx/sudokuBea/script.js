//Primera pregunta
const max=9;
let tablero = [
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
                ['X','X','X','X','X','X','X','X','X'],
              ];
let cuadrados = [
                  {x1:0,x2:2,y1:0,y2:2},
                  {x1:3,x2:5,y1:0,y2:2},
                  {x1:6,x2:8,y1:0,y2:2},
                 
                  {x1:0,x2:2,y1:3,y2:5},
                  {x1:3,x2:5,y1:3,y2:5},
                  {x1:6,x2:8,y1:3,y2:5},

                  {x1:0,x2:2,y1:6,y2:8},
                  {x1:3,x2:5,y1:6,y2:8},
                  {x1:6,x2:8,y1:6,y2:8},

                ];
// Quinto ejercicio
function comprobarFila(x,y,dato,matriz){
  let norepetido=true;
  for(let i=0;i<max;i++){
    if((dato==matriz[x][i])&&(y!=i)){
      norepetido=false;
    }
  }
  return norepetido;
}

function comprobarColumna(x,y,dato,matriz){
  let norepetido=true;
  for(let i=0;i<max;i++){
    if((dato==matriz[i][y])&&(x!=i)){
      //console.log("En la columna "+matriz[i][y]+" Posicion "+i+y);
      norepetido=false;
    }
  }
  return norepetido;
}
function visualizarColeccion(x,y,dato,matriz){
  for(let i=0;i<=max;i++){
      console.log(cuadrados[i].x1);
      console.log(cuadrados[i].x2);
      console.log(cuadrados[i].y1);
      console.log(cuadrados[i].y2);
    }
}
function definirCuadrado(x,y){
 let valorx,valory,cuadrado=-1;

  valorx=parseInt(x/3);
  valory=parseInt(y/3);
  //console.log("valores"+valorx+valory);
  
  //Cuadrado 1
  if((valorx==0)&&(valory==0)){
    cuadrado=0;
  }
  //Cuadrado 2
  if((valorx==0)&&(valory==1)){
    cuadrado=1;
  }

//Cuadrado 3
  if((valorx==0)&&(valory=2)){
    cuadrado=2;
  }


//Cuadrado 4
  if((valorx==1)&&(valory==0)){
    cuadrado=3;
  }

//Cuadrado 5
  if((valorx==1)&&(valory==1)){
    cuadrado=4;
  }

//Cuadrado 6
  if((valorx==1)&&(valory==2)){
    cuadrado=5;
  }


//Cuadrado 7
  if((valorx==2)&&(valory==0)){
    cuadrado=6;
  }

//Cuadrado 8
  if((valorx==2)&&(valory==1)){
    cuadrado=7;
  }

//Cuadrado 9
  if((valorx==2)&&(valory==2)){
    cuadrado=8;
  }

  //console.log("valor de cuadrado"+cuadrado);
  return cuadrado;
}
function comprobarCuadrados(x,y,dato,matriz){
  let cuadrado=definirCuadrado(x,y);
  let norepetido=true;
	//console.log("Posicion"+x+y);
	//console.log("Cuadrado"+cuadrado);

  for(let i=cuadrados[cuadrado].y1;i<=cuadrados[cuadrado].y2;i++){
    for(let j=cuadrados[cuadrado].x1;j<=cuadrados[cuadrado].x2;j++){
      //console.log("matriz "+matriz[i][j]+"posicion "+i+j+" Posiciones con las que compara "+x+y);
        if((dato==matriz[i][j])&&(x!=i)&&(y!=j)){
          console.log("matriz"+matriz[i][j]);
          norepetido=false;
        }  
    }
  }  
  //console.log(norepetido);
  return norepetido;      
}

//Segundo ejercicio 
function visualizar_matriz(matriz){
  let i,j,posicion;

  for(i=0;i<matriz.length;i++){
    for(j=0;j<matriz[i].length;j++){
      //console.log("Posicion "+i+" "+j+" valor:"+matriz[i][j]);
       if(matriz[i][j]!='X'){
          posicion=i+"."+j;
          document.getElementById(posicion).innerHTML=matriz[i][j];
        } 
    }
  }
}
//Tercer ejercicio
function numerosAleatorios(min,max){
  return Math.floor((Math.random() * (max - min + 1)) + min);
}
function noEstaOcupada(matriz,x,y){
  if(matriz[x][y]==='X')
    return true;
  else
    return false;
}
function rellenar_matriz(matriz){
  let i,j,x,y;
 
  //Números a colocar 30 números 3 veces del 0 al 9
   for(i=0;i<=3;i++){
	    j=0;
		while(j<=9){
			//Coordenadas
			 x=numerosAleatorios(0,8);
			 y=numerosAleatorios(0,8);
			// Mirar la ocupación 
			 if((noEstaOcupada(matriz,x,y))&&(comprobarFila(x,y,j,matriz))&&(comprobarColumna(x,y,j,matriz))&&(comprobarCuadrados(x,y,j,matriz)))
			 {
				matriz[x][y]=j;
				j++;
			 }    
		}
  }
 return matriz;

//  funcion mas simple
// for (let i = 0; i <30; i++) {
//   valor = numerosAleatorios(1,9);
//   x=numerosAleatorios(0,8);  
//   x=numerosAleatorios(0,8);  

//   if (matriz[x][y]==x) {
//     matriz[x][y]=valor;
//   }
// }

}
// Cuarto ejercicio
// Comprobar que es numero
function esNumero(valor){
  numero=/^[0-9]*$/;

  if(numero.test(valor))
    return true;
  else
    return false;

}
function leerDatos(x,y){
  let id=x+"."+y;
  let valor=document.getElementById('campo'+id).value;
  
  console.log(comprobarFila(x,y,valor,tablero));
  console.log(comprobarColumna(x,y,valor,tablero));
  console.log(comprobarCuadrados(x,y,valor,tablero));

  if((comprobarFila(x,y,valor,tablero))&&(comprobarColumna(x,y,valor,tablero))&&comprobarCuadrados(x,y,valor,tablero)){
    if (esNumero(valor))
      tablero[x][y]=valor;
    else
     alert("No has escrito un numero");
 }else{
   alert("El numero no es valido");
 }
  visualizar_matriz(tablero);
}


window.onload = function Carga(){
  //  visualizar_matriz(tablero);
   tablero=rellenar_matriz(tablero);
   visualizar_matriz(tablero);
   console.log(esNumero(0));

}