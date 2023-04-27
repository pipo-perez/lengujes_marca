function EsNumero(numero){
let patron =/^[0-9]+$/;
	//Comprobamos que la cadena no es 0
	if(numero.match(patron))
		return true;
	else
		return false;

}
function LeerNumero(){
	let numero = document.getElementById("numero").value;
	
	if (EsNumero(numero)){
		if ((numero%2)==0)
			document.writeln("<h1>PAR</h1>");
		else
			document.writeln("<h1>IMPAR</h1>");
	}else
			document.writeln("<h1>DATO ERRONEO</h1>");
	}