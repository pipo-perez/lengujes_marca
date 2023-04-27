// definir matriz

let matrizEjp = [
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
    [0,0,0,0],
];

let casillasMarcadas=[];

// bucle generar matriz
function cargaMatriz(){
    // varibale
    let posicion;
    // ejecucion del bucle
    for (let i = 0; i < matrizEjp.length; i++) {
        for (let x = 0; x < matrizEjp[i].length; x++) {
            // posicion=i.toString()+x.toString();
            posicion=""+i+x;
            document.getElementById(posicion).innerHTML = matrizEjp[i][x];           
            // console.log("Posicion de i: "+i+" j: "+ x +" valor: "+ matrizEjp[i][x]);
        }        
    }
}

function rellenarMatriz() {
    // alert("alksncaslkcsa")
    let x,y,numero;

    for (let i = 0; i < 6; i++) {
        numero = numAlert(1,99);
        x = numAlert(0,2);
        y = numAlert(0,3);

        if (matrizEjp[x][y]==0) {            
            matrizEjp[x][y]=numero;
        }
        // matrizEjp[x][y]=numero;
    }

}

// funcion generar numAleatroios
function numAlert(max,min) {
    return Math.floor((Math.random()*(max-min+1)+min));
}


//cambiar color
function cambiarColor(x,y) {
    document.getElementById(x+y).style.backgroundColor="#00FFFF";
    casillasMarcadas.push(matrizEjp[x][y]);
}

function visualizarArray() {
    for (let i = 0; i < casillasMarcadas.length; i++) {
        console.log(casillasMarcadas[i]);        
    }
}

// ==...==
// carga JS a html
window.onload = function cargaMenu() {
    rellenarMatriz();
    cargaMatriz();
    // visualizarArray();
}