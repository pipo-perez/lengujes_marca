// carga en la pantalla principal
window.onload = function carga() {
    verMatix();
    generar();
}

// 1-2. Define una matriz en javascript para representar el sudoku (0,5puntos). Realiza una función que permite visualizar la matriz en el documento HTML

// cuando se carga la página. (1punto)

// varible matriz global
let matrizSudoku = 
    [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
    ];
function verMatix() {
    let i,j,poscionMatriz;

    for (x = 0; x < matrizSudoku.length; x++) {
        for (y = 0; y < matrizSudoku[x].length; y++) {
            i = x+1;            
            j = x+1; 
            poscionMatriz=i.toString()+j.toString();
            document.getElementById('poscionMatriz').innerHTML = matrizSudoku[x][y];        
        } 
        generar();       
    }
}



// 3. El sudoku es rellenado por 30 números aleatorios del 1 al 9.
//Realiza una función que rellene el sudoku con números aleatorios. (1,5puntos)

function numAleaRandom(min,max) {
    return Math.floor(Math.random()*(max-min+1)) +min;
}

function generar() {
    poscionMatriz = document.getElementById("poscionMatriz").value;

    x=numAleaRandom(0,9);
    y=numAleaRandom(0,9);

        // resultadoSudo = document.getElementById("resultadoSudo").innerHTML = comprobacionNumeros();        

}

// 4. Realiza modificación el HTML para que mediante cuadros de texto, el usuario

// pueda insertar números e insertarlos en la matriz (1,5puntos)

// 5. Realiza una función que compruebe que los datos insertados son números

//(1 punto)

function comprobacionNumeros() {
    let numeroSudoku = 0;

    if (!numeroSudoku) {
        alert("Introduzca un numero")
    }
    return true;
}

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