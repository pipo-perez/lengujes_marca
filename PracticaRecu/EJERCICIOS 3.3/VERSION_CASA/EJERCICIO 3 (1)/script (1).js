let moneda;
let dinero;
function getMoneda(){
	 moneda = document.getElementById("monedas").value;
}
function convertir(){
	let resultado;
	let dinero=parseFloat(document.getElementById("numero").value);
	
	moneda=moneda+"";
	switch(moneda){
		case 'dolares': 
			resultado=dinero*1.09;
			break;
		case 'yenes':
			resultado=dinero*145.08;
			break;
		case 'rublos':
			resultado=dinero*88.70;
			break;
		default: 
			resultado=moneda;
			break;
	}
	document.getElementById("conversion").innerHTML = resultado;
	
}
