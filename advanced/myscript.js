$(document).ready(function(){
$("#moveme").draggable({ cursorAt: { top: 200, left: 200 } });

$(document).mousemove(function(event){
    let top = `${event.pageX - 128}px`;
    let left = `${event.pageY - 128}px`;

    $("#moveme").css({"top": left,"left":top})
  })


});