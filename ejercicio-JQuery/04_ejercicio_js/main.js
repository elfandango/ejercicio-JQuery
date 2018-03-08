/*Aparece el texto al cargar*/

$("document").ready(function() {
    
    $("#anuncio").text("clica aquí para cambiar de color")
    .hide()
    .fadeIn(1000)
    .css("height", "500");
});

//el array va fuera de a función
let colores = ["blue","green","silver","orange"]

$("#anuncio").on("click", function(){

    //funcion
    let color = colores [Math.floor(Math.random() * colores.length)];
    $("#anuncio").css("background-color", color);

});
//floor ajusta los números decimales a número entero