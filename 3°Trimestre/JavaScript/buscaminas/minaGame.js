const minimo = 0;
const maximo = 4;
let matriz = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];

function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function generarBomba() {
    let x,y;
    x = numeroAleatorio(0,4);
    y = numeroAleatorio(0,4);
    
    //poscion de la bomba con "B" (bomba) 
    matriz[x,y] = "B";
}

function hayBomba(x,y) {
    if (matriz[x,y]) {
        return true;
    }else{
        return false;
    }
}

function rellenarVecinos(x,y) {
    // casilla de arriba
    if ((y - 1 > minimo)&& (!hayBomba(x,y-1)) ) {
        matriz[x,y-1]++;
    }
    // casilla de abajo
    if ((y + 1 < maximo)&& (!hayBomba(x,y-1)) ) {
        matriz[x,y-1]++;
    }
    // casilla de izquierda
    if ((x - 1 > minimo)&& (!hayBomba(x-1,y)) ) {
        matriz[x-1,y]++;
    }
    // casilla de derecha
    if ((x + 1 < maximo)&& (!hayBomba(x+1,y)) ) {
        matriz[x+1,y]++;
    }
    // diagonales
    // diagonales arriba-izq
    if ((x - 1 < minimo)&& (y-1>minimo) && (!hayBomba(x+1,y-1)))  {
        matriz[x-1,y-1]++;
    }
    // diagonales arriba-derech
    if ((y - 1 > minimo)&& (x+1>minimo) && (!hayBomba(x+1,y-1)))  {
        matriz[x+1,y-1]++;
    }
    // diagonales abajo-izq (me falta esta mal)
    if ((x - 1 > minimo)&& (y+1<maximo) && (!hayBomba(x-1,y+1)))  {
        matriz[x-1,y+1]++;
    }
    // diagonales abajo-derech (me falta esta mal)
    if ((x + 1 < maximo)&& (y+1<maximo) && (!hayBomba(x+1,y+1)))  {
        matriz[x+1,y+1]++;
    }


}