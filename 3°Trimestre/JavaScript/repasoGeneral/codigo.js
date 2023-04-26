// evento 1
function sumaEvt1() {
    let numeroUno = document.getElementById("numeroUno").value;
   
    if (numeroUno %2 === 0) {
        resultEvt1.innerHTML = "Es par";
    }else{
        resultEvt1.innerHTML = "Es impar";
    }
}

// evento 2
// function imagenChulis() {
//     const laImg = ["../../04.3.JS_eventos/img/1.jpg","../../04.3.JS_eventos/img/2.jpg","../../04.3.JS_eventos/img/3.jpg","../../04.3.JS_eventos/img/4.jpg",];
//     const imgRandom = laImg[Math.floor(Math.random())*laImg.length];

// //    img.src = imgRandom;
// }

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

window.onload = function cargaMenu(){
    cargaMatrix();
}