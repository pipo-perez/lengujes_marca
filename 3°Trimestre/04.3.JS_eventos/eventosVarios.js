// Evento 1
function parImpar() {
    let numero = document.getElementById("numero").value;
    // let cuadro = document.getElementById("resultado").innerHTML = numero;

    if (numero % 2 === 0) {
        resultado.innerHTML ="El número es par.";
    } else {
        resultado.innerHTML ="El número es impar.";
    }
}

// Evento 2
function cambioDeImagen(img) {
    const imagenesVarias = ["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg"];
    const nuevaImagen = imagenesVarias[Math.floor(Math.random() * imagenesVarias.length)];
    img.src = nuevaImagen;
}
// Evento 3
function convertidorMonedas() {
    let dinero = document.getElementById("dinero").value;
    let moneda = document.getElementById("moneda").value;
    let cambio;
    let resust;

    // if (moneda==="Dolares") {
    //     cambio = 1.06;
    // }else if (moneda ==="Yenes") {
    //     cambio = 10.2;
    // }else if (moneda==="Rublos") {
    //     moneda = 32.21;
    // }

    switch (moneda) {
        case 'Dolar':
            moneda = dinero * 1.06;
            break;
        case 'Yenes':
            moneda = dinero * 10.2;
        case 'Rublos':
            moneda = dinero * 32.21;
        break;
        default:
    }
    

    // resust = (dinero*cambio).toFixed(3);
    // resust = (dinero*moneda);
    formResult = document.getElementById("formResult").innerHTML = dinero + "€ son " + resust + " " + moneda;
}

// Evento 4
// function imprimirNumRandom(){
//     const num = Math.floor(Math.random() * 100); // genera un número aleatorio entre 0 y 99
//     document.getElementById("imprimirRst").textContent =' Número aleatorio: ${num}';
// }
function mostrarCoordenas(event) {
    let x, y;

    x=event.clientX;
    y=event.clientY;

    coordenadas = document.getElementById("coordenadas").innerHTML = "Las coordenadas: x:" +x +" y: "+y;

}

function borrado(){
    coordenadas = document.getElementById("coordenadas").innerHTML = " ";
}

// bingo
let matrix = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
]


function cargaMatrix() {

    for (let i = 0; i < matrix.length; i++) {
        for (let x = 0; x < matrix[i].length; x++) {
            let posicion = i+"."+x;
            document.getElementById(posicion).innerHTML = matrix[i][x];           
        }        
    }
}

// funcion numeros aleatoris
function numAleatorios(max,min) {
    return Math.floor((Math.random()*(max-min+1)+min));
}

function numeros() {
   //  funcion simple
   let x,y;
for (let i = 0; i <30; i++) {
  let numero = numerosAleatorios(1,9);
  x=numerosAleatorios(0,8);  
  y=numerosAleatorios(0,8);  

  matrix[x][y]=numero;
}

}

// carga visualizacion js a html
window.onload = function cargaMenu(){
    numeros();
    cargaMatrix();
}