// Letras variables declaraciones
let letrasProbadas = "";
let palabraAdivinar = "";
let palabra = ["hola", "mundo", "mascota", "solo"];

function getNumero(maximo) {
  return Math.floor(Math.random() * maximo);
}

function CargaDatos() {
  alert("Ponga letrasa");
  let letra = document.getElementById("letra").value;
  let numero = 0;
  letrasProbadas = letrasProbadas + letra;

  document.getElementById("letrasUsadas").innerHTML = letrasProbadas;

  // Solo lo deberia de hacer en la carga inicialica en el body | arreglar en casa
  numero = getNumeroAleatorio(palabra.length);
  palabraAdivinar = palabra[numero];
  document.getElementById("resultadoFinal").innerHTML = palabraAdivinar;

  //   Otra parte mas aki debajo
//   PintarPalabras()
}

function PintarPalabras(maximo) {
  let frase = "-";
  for (let i = 0; i < longitud; i++) {
    frase = frase + "_" + "_";
  }
  return frase;
}
