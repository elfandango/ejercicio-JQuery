$("#imagen1").hover(


    function () {
        $("#mensaje_img1").show();
    },

    function () {
        /*si el ratón no está encima*/
        $("#mensaje_img1").hide();
    });

$("document").ready(function(){
    $("#mensaje_img1").hide();
}

);