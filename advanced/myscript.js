$(document).ready(function(){
$("#moveme").draggable({ cursorAt: { top: 200, left: 200 } });

$(document).mousemove(function(event){
    let top = `${event.pageX - 128}px`;
    let left = `${event.pageY - 128}px`;

    $("#moveme").css({"top": left,"left":top});
  })

  $("#moveme").one("click",function(event){
    let top = `${event.pageX - 128}px`;
    let left = `${event.pageY - 128}px`; 

    
    $("#moveme").attr("id", "moveme1");
    // $("#moveme1").css({"top": left,"left":top});
    $("#moveme1").animate({
        opacity: 1,
        paddingTop: '+=800',
    });
    $("#moveme1").fadeOut(2000);
    $("#moveme1").fadeIn(2000);



  });


}); 