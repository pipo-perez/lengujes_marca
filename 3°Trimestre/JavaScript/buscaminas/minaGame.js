const minimo = -1;
const maximo = 5;
let matriz = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function generarBomba() {
    let x,y;
    x = numeroAleatorio(0,4);
    y = numeroAleatorio(0,4);
    
    //poscion de la bomba con "B" (bomba) 
    matriz[x][y] = 'B';
    rellenarVecinos(x,y);
}


function hayBomba(x,y) {
    if (matriz[x][y]=='B') {
        return true;
    }else{
        return false;
    }
}

function rellenarVecinos(x,y) {
    // console.log(hayBomba(x,y-1));
    // console.log(y-1>minimo);
    // casilla de arriba
    if ((y-1>minimo)&&(!hayBomba(x,y-1))) {
        // console.log("rellenarvecinmos");
        matriz[x][y-1]++;        
    }
    // casilla de abajo
    if ((y+1 < maximo)&& (!hayBomba(x,y-1)) ) {
        matriz[x+1][y-1]++;
        // console.log("rellenarvecinmos");

    }
    // casilla de izquierda
    if ((x-1 > minimo)&& (!hayBomba(x-1,y)) ) {
        matriz[x-1][1,y]++;
    }
    // casilla de derecha
    if ((x+1 < maximo)&& (!hayBomba(x+1,y)) ) {
        matriz[x+1][1,y]++;
    }
    // diagonales
    // diagonales arriba-izq
    if ((x - 1 < minimo)&& (y-1>minimo) && (!hayBomba(x+1,y-1)))  {
        matriz[x-1][y-1]++;
    }
    // diagonales arriba-derech
    if ((y - 1 > minimo)&& (x+1>minimo) && (!hayBomba(x+1,y-1)))  {
        matriz[x+1][y-1]++;
    }
    // diagonales abajo-izq (me falta esta mal)
    if ((x - 1 > minimo)&& (y+1<maximo) && (!hayBomba(x-1,y+1)))  {
        matriz[x-1][y+1]++;
    }
    // diagonales abajo-derech (me falta esta mal)
    if ((x + 1 < maximo)&& (y+1<maximo) && (!hayBomba(x+1,y+1)))  {
        matriz[x+1][y+1]++;
    }
}


window.onload = function Carga() {
    generarBomba();
    visualizarmatriz();
}

function visualizarmatriz() {
    let posicion,i,j;
    for (x = 0; x <matriz.length; x++) {
        for (y= 0; y <matriz[x].length; y++) {
            i = x+1;
            j = y+1;
            posicion=i.toString()+j.toString();
            document.getElementById(posicion).innerHTML= matriz[x][y];
        }
    }
}