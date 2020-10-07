var json = JSON.parse(products);



$(document).ready(function(){

    for(let i=0; i < json.length; i++){
        $(`#${i} .btn`).attr("number", `${i}`);
        $(`#${i} span:contains('Product Category')`).text(json[i].type);
        
        if (json[i].type == "Notebook"){
            $(`#${i}`).css("background-color", "red");
        } else if (json[i].type == "Phone"){
        $(`#${i}`).css("background-color", "green");
        }
        else {
            $(`#${i}`).css("background-color", "blue");
        }

    };

    $(".btn").on('click', function(){
        let index = $(this).attr("number");
        json[index].quantity--;
    });



})