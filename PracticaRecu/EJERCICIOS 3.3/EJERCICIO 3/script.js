let moneda;
let dinero;
function getMoneda(){
	 moneda = document.getElementById("monedas").value;
}
function convertir(){
	let resultado;
	let dinero= document.getElementById("numero").value;
	alert(moneda);
	//document.getElementById("numero").value;
	moneda=moneda+"";
	switch(moneda){
		case 'dolares': resultado=dinero*1,09;
		case 'yenes':resultado=dinero*145,08;
		case 'rublos':resultado=dinero*88,70;
		default: resultado=moneda;
	}
	document.getElementById("conversion").innerHTML = resultado;
	
}
