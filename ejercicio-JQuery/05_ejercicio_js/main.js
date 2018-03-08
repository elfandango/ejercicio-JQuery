//al iniciarse el carrete no se ve

$(document).ready(function () {
    $("#carrete").hide();
});



$(document).on("click", function () {

    $("#carrete").show()
    $("h1").hide();

});


$("img").hover(function () {

        $(this).css("width", "300")
            .css("height", "auto");
    }

    ,function () {
    $(this).css("width", "auto");
    }

);