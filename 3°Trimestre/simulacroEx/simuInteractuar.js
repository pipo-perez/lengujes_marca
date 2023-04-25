// carga principal js a html
window.onload = function Carga() {
    mostrasMatriz();
    generarSudokuNum();
    validarNumerosVarios();
    // verificarCuadradoGeneral();
    // dimensionMatizSudo();
    alert("hola");
}


// 1. Define una matriz en javascript para representar el sudoku (0,5puntos)

let matrizSudoku = [[0]]


// function dimensionMatizSudo() {
//     for (let x = 0; x <= 9; x++) {
//         matrizSudoku[x]= new Array();
        
//         for (let y = 0; y <= 0; y++) {
//             matrizSudoku[x][y]= x+y;            
//         }
//     }

//     for(let inicioSentencia in matrizSudoku){
//         // console.log(inicioSentencia + "=" + matrizSudoku[inicioSentencia])
//         document.getElementById("llamaSudoku").innerHTML =inicioSentencia +" = "+ matrizSudoku[inicioSentencia];
//     }
// }

// 2. Realiza una función que permite visualizar la matriz en el documento HTML
// cuando se carga la página. (1punto)

function mostrasMatriz() {
    // console.log(matrizSudoku);
    document.getElementById("llamaSudoku").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku1").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku2").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku3").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku4").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku5").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku6").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku7").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku8").innerHTML = matrizSudoku;
// 
    document.getElementById("llamaSudoku0").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku10").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku20").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku30").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku40").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku50").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku60").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku70").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku80").innerHTML = matrizSudoku;
// 
    document.getElementById("llamaSudokuUno").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku11").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku21").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku31").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku41").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku51").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku61").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku71").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku81").innerHTML = matrizSudoku;
    // 
    document.getElementById("llamaSudokuDos").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku12").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku22").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku32").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku42").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku52").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku62").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku72").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku82").innerHTML = matrizSudoku;
    // 
    document.getElementById("llamaSudokuTres").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku13").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku23").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku33").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku43").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku53").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku63").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku73").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku83").innerHTML = matrizSudoku;
    // 
    document.getElementById("llamaSudokuCuatro").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku14").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku24").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku34").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku44").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku54").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku64").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku74").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku84").innerHTML = matrizSudoku;
    // / 
    document.getElementById("llamaSudokuCinco").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku15").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku25").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku35").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku45").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku55").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku65").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku75").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku85").innerHTML = matrizSudoku;
    // d// / 
    document.getElementById("llamaSudokuSeis").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku16").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku26").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku36").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku46").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku56").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku66").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku76").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku86").innerHTML = matrizSudoku;
    // d// / 
    document.getElementById("llamaSudokuSiete").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku17").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku27").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku37").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku47").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku57").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku67").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku77").innerHTML = matrizSudoku;
    document.getElementById("llamaSudoku87").innerHTML = matrizSudoku;
}
// 3. El sudoku es rellenado por 30 números aleatorios del 1 al 9. Realiza una
// función que rellene el sudoku con números aleatorios. (1,5puntos)


function numAleatSudoku(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}

function generarSudokuNum() {
    let x,y;
    x = numAleatSudoku(0,9);
    y = numAleatSudoku(0,9);

    // matrizSudoku[x][y] = "a";
}

// 4 - 5 Realiza modificación el HTML para que mediante cuadros de texto, el usuario
// pueda insertar números e insertarlos en la matriz (1,5puntos)

function validarNumerosVarios() {
    // variables para almacenar numero de usuario
    // let numeroSudokuUno = 0;
    let numeroSudokuUno = parseFloat(document.getElementById("numeroSudokuUno").value);

    // revisar esta mal esta parte
    document.getElementById("mostrar").innerHTML = numeroSudokuUno; 

    if (!numAleatSudoku) {
        alert("Introduce un numero");
        return false;
    }
    // return true; //se pondra para dar la opcion verdadera del bucle if
}
// 4 - 5. Realiza una función que compruebe que los datos insertados son números 
// (1 punto)

// 6. Realiza una función para cada una de las siguientes funcionalidades (2

// puntos)

// a. Compruebe que el el cuadrado 3x3 no hay números repetidos (1

// punto)

function verificarCuadradoGeneral() {
    const numeroComp = new Set();
    const tableta = document.getElementById('tableta');

    for (let a = 0; a <= 3; a++) {
        for (let b = 0; b <= 3; b++) {
            let celda = document.getElementById('llamaSudoku1' +a+b)            
            let numeroVariable = parseInt(celda.innerText);
        
            if (numeroComp.has(numeroVariable)) {
                return false;
            }
        }        
    }


}

// function verificarCuadrado() {
//     const numeros = new Set();
//     const cuadrado = document.getElementById('cuadrado');
//     for (let i = 1; i <= 3; i++) {
//       for (let j = 1; j <= 3; j++) {
//         const celda = document.getElementById('c' + i + j);
//         const numero = parseInt(celda.innerText);
//         if (numeros.has(numero)) {
//           return false; // si hay número repetido, retorna false
//         }
//         numeros.add(numero);
//       }
//     }
//     return numeros.size === 9; // retorna true si no hay repetidos y hay 9 números distintos
//   }
  
//   // Ejemplo de uso:
//   if (verificarCuadrado()) {
//     console.log("El cuadrado 3x3 no tiene números repetidos");
//   } else {
//     console.log("El cuadrado 3x3 tiene números repetidos");
//   }
  

// b. Compruebe que en una fila no hay números repetidos (0,5puntos)

// c. Compruebe que en una columna no hay números repetidos (0,5

// puntos)

// 7.Realiza una función que compruebe el resultado una vez rellenado la filas y

// las columnas(0,75puntos)

// 8. Realiza los cambios necesarios para poder jugar. (0,75puntos)