let letrasProbadas="";
let palabraAdivinar="";
let palabras =['hola','mundo','mascota', 'casa', 'solo'];
let tablero="";


function Pintar(){

    let c=document.getElementById("canvas");
    let context = c.getContext("2d");
   
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(368, 57);
    context.lineTo(369, 55);
    context.stroke();
    context.lineTo(369, 52);
    context.stroke();
    context.lineTo(367, 49);
    context.stroke();
    context.lineTo(363, 45);
    context.stroke();
    context.lineTo(357, 43);
    context.stroke();
    context.lineTo(348, 40);
    context.stroke();
    context.lineTo(336, 37);
    context.stroke();
    context.lineTo(325, 34);
    context.stroke();
    context.lineTo(314, 32);
    context.stroke();
    context.lineTo(304, 31);
    context.stroke();
    context.lineTo(294, 31);
    context.stroke();
    context.lineTo(277, 31);
    context.stroke();
    context.lineTo(266, 31);
    context.stroke();
    context.lineTo(255, 31);
    context.stroke();
    context.lineTo(245, 31);
    context.stroke();
    context.lineTo(235, 31);
    context.stroke();
    context.lineTo(227, 34);
    context.stroke();
    context.lineTo(217, 37);
    context.stroke();
    context.lineTo(207, 40);
    context.stroke();
    context.lineTo(193, 44);
    context.stroke();
    context.lineTo(185, 48);
    context.stroke();
    context.lineTo(178, 51);
    context.stroke();
    context.lineTo(173, 55);
    context.stroke();
    context.lineTo(169, 59);
    context.stroke();
    context.lineTo(166, 61);
    context.stroke();
    context.lineTo(163, 66);
    context.stroke();
    context.lineTo(159, 72);
    context.stroke();
    context.lineTo(156, 77);
    context.stroke();
    context.lineTo(153, 83);
    context.stroke();
    context.lineTo(149, 89);
    context.stroke();
    context.lineTo(147, 93);
    context.stroke();
    context.lineTo(144, 100);
    context.stroke();
    context.lineTo(143, 104);
    context.stroke();
    context.lineTo(142, 109);
    context.stroke();
    context.lineTo(141, 113);
    context.stroke();
    context.lineTo(140, 117);
    context.stroke();
    context.lineTo(140, 121);
    context.stroke();
    context.lineTo(140, 124);
    context.stroke();
    context.lineTo(140, 128);
    context.stroke();
    context.lineTo(140, 132);
    context.stroke();
    context.lineTo(141, 135);
    context.stroke();
    context.lineTo(142, 139);
    context.stroke();
    context.lineTo(143, 143);
    context.stroke();
    context.lineTo(146, 147);
    context.stroke();
    context.lineTo(148, 151);
    context.stroke();
    context.lineTo(150, 154);
    context.stroke();
    context.lineTo(153, 157);
    context.stroke();
    context.lineTo(157, 160);
    context.stroke();
    context.lineTo(163, 165);
    context.stroke();
    context.lineTo(168, 169);
    context.stroke();
    context.lineTo(174, 173);
    context.stroke();
    context.lineTo(180, 177);
    context.stroke();
    context.lineTo(185, 180);
    context.stroke();
    context.lineTo(191, 183);
    context.stroke();
    context.lineTo(197, 186);
    context.stroke();
    context.lineTo(205, 189);
    context.stroke();
    context.lineTo(212, 192);
    context.stroke();
    context.lineTo(218, 193);
    context.stroke();
    context.lineTo(225, 195);
    context.stroke();
    context.lineTo(230, 196);
    context.stroke();
    context.lineTo(236, 198);
    context.stroke();
    context.lineTo(241, 198);
    context.stroke();
    context.lineTo(245, 198);
    context.stroke();
    context.lineTo(251, 198);
    context.stroke();
    context.lineTo(256, 198);
    context.stroke();
    context.lineTo(261, 198);
    context.stroke();
    context.lineTo(267, 198);
    context.stroke();
    context.lineTo(276, 198);
    context.stroke();
    context.lineTo(282, 198);
    context.stroke();
    context.lineTo(287, 198);
    context.stroke();
    context.lineTo(291, 197);
    context.stroke();
    context.lineTo(294, 196);
    context.stroke();
    context.lineTo(299, 195);
    context.stroke();
    context.lineTo(303, 195);
    context.stroke();
    context.lineTo(309, 194);
    context.stroke();
    context.lineTo(315, 192);
    context.stroke();
    context.lineTo(319, 189);
    context.stroke();
    context.lineTo(324, 188);
    context.stroke();
    context.lineTo(327, 185);
    context.stroke();
    context.lineTo(331, 182);
    context.stroke();
    context.lineTo(334, 180);
    context.stroke();
    context.lineTo(337, 178);
    context.stroke();
    context.lineTo(340, 176);
    context.stroke();
    context.lineTo(344, 172);
    context.stroke();
    context.lineTo(345, 171);
    context.stroke();
    context.lineTo(350, 168);
    context.stroke();
    context.lineTo(353, 165);
    context.stroke();
    context.lineTo(354, 161);
    context.stroke();
    context.lineTo(357, 159);
    context.stroke();
    context.lineTo(360, 153);
    context.stroke();
    context.lineTo(362, 150);
    context.stroke();
    context.lineTo(366, 144);
    context.stroke();
    context.lineTo(368, 141);
    context.stroke();
    context.lineTo(369, 138);
    context.stroke();
    context.lineTo(371, 134);
    context.stroke();
    context.lineTo(372, 131);
    context.stroke();
    context.lineTo(373, 128);
    context.stroke();
    context.lineTo(373, 125);
    context.stroke();
    context.lineTo(374, 122);
    context.stroke();
    context.lineTo(374, 120);
    context.stroke();
    context.lineTo(374, 117);
    context.stroke();
    context.lineTo(374, 114);
    context.stroke();
    context.lineTo(374, 108);
    context.stroke();
    context.lineTo(374, 105);
    context.stroke();
    context.lineTo(374, 101);
    context.stroke();
    context.lineTo(374, 96);
    context.stroke();
    context.lineTo(374, 92);
    context.stroke();
    context.lineTo(374, 88);
    context.stroke();
    context.lineTo(374, 84);
    context.stroke();
    context.lineTo(374, 82);
    context.stroke();
    context.lineTo(373, 79);
    context.stroke();
    context.lineTo(372, 75);
    context.stroke();
    context.lineTo(372, 71);
    context.stroke();
    context.lineTo(371, 67);
    context.stroke();
    context.lineTo(371, 61);
    context.stroke();
    context.lineTo(370, 57);
    context.stroke();
    context.lineTo(370, 54);
    context.stroke();
    context.lineTo(369, 51);
    context.stroke();
    context.lineTo(369, 49);
    context.stroke();
    context.lineTo(368, 47);
    context.stroke();
    context.lineTo(367, 46);
    context.stroke();
    context.lineTo(367, 45);
    context.stroke();
    context.lineTo(366, 43);
    context.stroke();
    context.lineTo(365, 42);
    context.stroke();
    context.lineTo(364, 41);
    context.stroke();
    context.lineTo(364, 41);
    context.stroke();
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(251, 201);
    context.lineTo(251, 202);
    context.stroke();
    context.lineTo(252, 203);
    context.stroke();
    context.lineTo(252, 205);
    context.stroke();
    context.lineTo(253, 208);
    context.stroke();
    context.lineTo(254, 211);
    context.stroke();
    context.lineTo(254, 216);
    context.stroke();
    context.lineTo(254, 222);
    context.stroke();
    context.lineTo(254, 229);
    context.stroke();
    context.lineTo(254, 237);
    context.stroke();
    context.lineTo(254, 248);
    context.stroke();
    context.lineTo(254, 255);
    context.stroke();
    context.lineTo(254, 263);
    context.stroke();
    context.lineTo(254, 269);
    context.stroke();
    context.lineTo(254, 273);
    context.stroke();
    context.lineTo(254, 276);
    context.stroke();
    context.lineTo(254, 280);
    context.stroke();
    context.lineTo(254, 285);
    context.stroke();
    context.lineTo(254, 287);
    context.stroke();
    context.lineTo(254, 288);
    context.stroke();
    context.lineTo(254, 289);
    context.stroke();
    context.lineTo(254, 290);
    context.stroke();
    context.lineTo(254, 291);
    context.stroke();
    context.lineTo(254, 291);
    context.stroke();
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(250, 289);
    context.lineTo(250, 290);
    context.stroke();
    context.lineTo(249, 292);
    context.stroke();
    context.lineTo(245, 297);
    context.stroke();
    context.lineTo(240, 301);
    context.stroke();
    context.lineTo(235, 306);
    context.stroke();
    context.lineTo(230, 310);
    context.stroke();
    context.lineTo(226, 314);
    context.stroke();
    context.lineTo(221, 317);
    context.stroke();
    context.lineTo(216, 321);
    context.stroke();
    context.lineTo(211, 325);
    context.stroke();
    context.lineTo(207, 329);
    context.stroke();
    context.lineTo(205, 330);
    context.stroke();
    context.lineTo(205, 330);
    context.stroke();
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(256, 289);
    context.lineTo(257, 290);
    context.stroke();
    context.lineTo(257, 291);
    context.stroke();
    context.lineTo(260, 294);
    context.stroke();
    context.lineTo(262, 298);
    context.stroke();
    context.lineTo(263, 301);
    context.stroke();
    context.lineTo(265, 307);
    context.stroke();
    context.lineTo(266, 311);
    context.stroke();
    context.lineTo(269, 315);
    context.stroke();
    context.lineTo(271, 319);
    context.stroke();
    context.lineTo(272, 322);
    context.stroke();
    context.lineTo(273, 324);
    context.stroke();
    context.lineTo(275, 328);
    context.stroke();
    context.lineTo(275, 330);
    context.stroke();
    context.lineTo(277, 332);
    context.stroke();
    context.lineTo(278, 333);
    context.stroke();
    context.lineTo(278, 334);
    context.stroke();
    context.lineTo(278, 334);
    context.stroke();
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(254, 241);
    context.lineTo(254, 243);
    context.stroke();
    context.lineTo(260, 243);
    context.stroke();
    context.lineTo(273, 243);
    context.stroke();
    context.lineTo(280, 243);
    context.stroke();
    context.lineTo(284, 243);
    context.stroke();
    context.lineTo(289, 243);
    context.stroke();
    context.lineTo(293, 243);
    context.stroke();
    context.lineTo(297, 243);
    context.stroke();
    context.lineTo(301, 243);
    context.stroke();
    context.lineTo(303, 243);
    context.stroke();
    context.lineTo(304, 243);
    context.stroke();
    context.lineTo(305, 243);
    context.stroke();
    context.lineTo(306, 243);
    context.stroke();
    context.lineTo(307, 243);
    context.stroke();
    context.lineTo(308, 243);
    context.stroke();
    context.lineTo(309, 243);
    context.stroke();
    context.lineTo(312, 244);
    context.stroke();
    context.lineTo(315, 244);
    context.stroke();
    context.lineTo(315, 244);
    context.stroke();
    context.strokeStyle = '#000000';
    context.beginPath();
    context.moveTo(253, 245);
    context.lineTo(252, 245);
    context.stroke();
    context.lineTo(242, 245);
    context.stroke();
    context.lineTo(237, 244);
    context.stroke();
    context.lineTo(231, 243);
    context.stroke();
    context.lineTo(225, 243);
    context.stroke();
    context.lineTo(218, 243);
    context.stroke();
    context.lineTo(210, 242);
    context.stroke();
    context.lineTo(202, 242);
    context.stroke();
    context.lineTo(195, 242);
    context.stroke();
    context.lineTo(189, 242);
    context.stroke();
    context.lineTo(182, 242);
    context.stroke();
    context.lineTo(180, 242);
    context.stroke();
    context.lineTo(178, 242);
    context.stroke();
    context.lineTo(178, 242);
    context.stroke();

}

function getNumeroAleatorio(maximo){
  
    return Math.floor(Math.random()*maximo);

}

function PintarPalabra(longitud) {
  
    let frase="_";
    for(let i=0;i<longitud-1;i++){
        frase=frase+" "+"_";
    }
    return frase;
}

function CargaDatos() {
  
    let letra = document.getElementById("letras").value;

    letrasProbadas=letrasProbadas+ " " + letra;
    document.getElementById("letrasUsadas").innerHTML=letrasProbadas;
    
    // llamr a una ffuncion qque comprobara la letra en la palabra
    ComprobarLetra(letra, palabraAdivinar);
    document.getElementById("palabraAdivinar").innerHTML=tablero;

}

function DatosIniciales() {
   
    let numero=0;
    // Elegir la palabra
    numero=getNumeroAleatorio(palabras.length);
    palabraAdivinar=palabras[numero];
    // 2.Pintar la palabra
    // Longitud de la palabra
    tablero=PintarPalabra(palabraAdivinar.length);
    document.getElementById("palabraAdivinar").innerHTML=tablero;
    Pintar();
}

function ComprobarLetra(letra, palabra) {

if (palabra.includes(letra))
  for (let i=0;i<palabra.length;i++) {
    if (palabra[i]===letra) {
        tablero=tablero.substring(0,i*2)+letra+tablero.substring(i*2+1,tablero.length);
    }
  }
  ComprobarResultado(palabraAdivinar,EliminarBlancos(tablero));
}

function EliminarBlancos(palabra) {
    
    palabra=palabra.replace(/\s+/g,'');
    return palabra;

}

function ComprobarResultado(palabraAdivinar,palabra) {
    if (palabraAdivinar === palabra)
        alert("HAS GANADO");
    
}