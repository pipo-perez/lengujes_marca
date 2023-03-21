let horas=0;
let minutos=0;
let segundos=0;

// horas
window.setInterval (function(){
    document.getElementById('hora').innerHTML = horas;
    horas++;
},10000);

// minutos
window.setInterval (function(){
    document.getElementById('minutos').innerHTML = minutos;
    minutos++;
},1000);

// segundos
window.setInterval (function(){
    document.getElementById('segundo').innerHTML = segundos;
    segundos++;
},100);