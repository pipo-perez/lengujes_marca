// variables
let minutos=0;
let segundos=0;

// funcion reloj
function reloj() {
    document.getElementById("reloj").innerHTML=minutos+":"+segundos;

    if (segundos<=59) {
        segundos++;
           
    }else{
        minutos++;     
        segundos=0;   
    }
}

// parar
function parar() {
    clearInterval(id);
}

// reanudar
function reanudar() {
    id=setInterval(reloj,1000);    
}

// resetear
function resetear() {
    minutos=0;
    segundos=0;
}

// inicio
window.onload = function Carga(){
    // alert("hola");
    id=setInterval(reloj,1000);
}