function Mostrar(){
    // Primera parte
    // alert("Hola Mundo");
    // document.write("hola q hace parceros");
    // El documen.write te elimina todo, mejor no toquetear mucho.
    
    // Segunda parte
    // let parrafos = document.getElementsByTagName("p");

    // for (let i=0; i <parrafos.length; i++){
    //     alert(parrafos[i].innerHTML);
    // }

    // Tercela Parte
    // let nodo6 = document.getElementById("nodo6").innerHTML;
    // document.write(nodo6); //llama a la variable

    // Cuarta Parte
    // let elementillo = document.createElement("h1"); //Creamos etiquetas
    // let texto = document.createTextNode("Hola soy buenillo");

    // elementillo.appendChild(texto);
    // document.body.appendChild(texto);
    // document.getElementById("remplazar").innerHTML="Pruebas";

    // 5 parte. Eliminar Etiqueta
    // let fueraBasura = document.getElementById("fuera");
    // fueraBasura.parentNode.removeChild(fueraBasura);

}   

function EliminarEsto(){
    alert("Se va a elimar el hola mundo 2")
    let fueraBasura = document.getElementById("fuera");
    fueraBasura.parentNode.removeChild(fueraBasura);
}