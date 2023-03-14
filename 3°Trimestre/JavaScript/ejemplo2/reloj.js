let horas=0;
let minutos=0;
let segundos=0;

// horas
window.setInterval (function(){
    document.getElementById('hora').innerHTML = horas;
    horas++;
},1);

// minutos
window.setInterval (function(){
    document.getElementById('minutos').innerHTML = minutos;
    minutos++;
},1000);

// segundos
window.setInterval (function(){
    document.getElementById('reloj').innerHTML = segundos;
    segundos++;
},10000);