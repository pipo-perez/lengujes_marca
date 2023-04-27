function LeerNumero(){
	let numero = document.getElementById("numero").value;
	if ((numero%2)==0)
		document.writeln("<h1>PAR</h1>");
	else
		document.writeln("<h1>IMPAR</h1>");
}