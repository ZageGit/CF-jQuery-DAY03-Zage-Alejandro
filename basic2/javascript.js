$(document).ready(function(){


    $("#btn").on('click', function(){
        var name = $("#taskName").val();
        var desc = $("#taskDesc").val();
        $("ul").append(`<li><h3>${name}</h3> <p class="out">${desc}</p></li>`);
    });




    $(".out").one('click', function(){
        $(this).animate({
            opacity: 0,
            paddingLeft: '+=80',
        });
    });


});
