// 1. Define una matriz en javascript para representar el sudoku (0,5puntos)
let matrizSudoku = [
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0]
]

// 2. Realiza una función que permite visualizar la matriz en el documento HTML
// cuando se carga la página. (1punto)

function cargaMatiz() {
    
    for (let i = 0; i < matrizSudoku.length; i++) {
        for (let x = 0; x < matrizSudoku[i].length; x++) {
            // if (matrizSudoku[i],[x]!=0) {
                let posicion = i+"."+x;
                document.getElementById(posicion).innerHTML = matrizSudoku[i][x];
            // }            
        }        
    }
}
// 3. El sudoku es rellenado por 30 números aleatorios del 1 al 9. Realiza una
// función que rellene el sudoku con números aleatorios. (1,5puntos)

function numAleatSudoku(min,max) {
    return Math.floor((Math.random()*(max-min+1)+min));
}
// 4. Realiza modificación el HTML para que mediante cuadros de texto, el usuario
// pueda insertar números e insertarlos en la matriz (1,5puntos)

// 5. Realiza una función que compruebe que los datos insertados son números (1
// punto)


// 6. Realiza una función para cada una de las siguientes funcionalidades (2
// puntos)

// a. Compruebe que el el cuadrado 3x3 no hay números repetidos (1
// punto)

// b. Compruebe que en una fila no hay números repetidos (0,5puntos)

// c. Compruebe que en una columna no hay números repetidos (0,5
// puntos)

// 7.Realiza una función que compruebe el resultado una vez rellenado la filas y
// las columnas(0,75puntos)

// 8. Realiza los cambios necesarios para poder jugar. (0,75puntos)





// funcion de llama cuelga JS a html
window.onload = function carga() {
    cargaMatiz();   
    // alert("gola");
}