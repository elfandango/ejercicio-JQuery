/*Activa y desactiva la imágen 1*/

$("#elem1").hover(

    function () {
        $("img").attr("src", "img/rio.jpg");
        $("#elem1").addClass("destacar");
    },

    function () {
        /*si el ratón no está encima*/
        $("img").attr("src", "img/blanco.jpg");
        $("#elem1").removeClass("destacar");
    });

/*Activa y desactiva la imágen 2*/

$("#elem2").hover(

    function () {
        $("img").attr("src", "img/lago.jpg");
        $("#elem2").addClass("destacar");
    },

    function () {
        /*si el ratón no está encima*/
        $("img").attr("src", "img/blanco.jpg");
        $("#elem2").removeClass("destacar");
    });

/*Activa y desactiva la imágen 3*/

$("#elem3").hover(

    function () {
        $("img").attr("src", "img/sol.jpg");
        $("#elem3").addClass("destacar");
    },

    function () {
        /*si el ratón no está encima*/
        $("img").attr("src", "img/blanco.jpg");
        $("#elem3").removeClass("destacar");
    });

/*Activa y desactiva la imágen 4*/

$("#elem4").hover(

    function () {
        $("img").attr("src", "img/arbol.jpg");
        $("#elem4").addClass("destacar");
    },

    function () {
        /*si el ratón no está encima*/
        $("img").attr("src", "img/blanco.jpg");
        $("#elem4").removeClass("destacar");
    });




/*Al cargar la imágen aparece en blanco*/ 

$("document").ready(function () {
        $("#contenedor2 > img").attr("src", "img/blanco.jpg");
    }

);

