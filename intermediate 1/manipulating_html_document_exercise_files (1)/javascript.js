var json = JSON.parse(products);



$(document).ready(function(){

    for(let i=0; i < products.length; i++){
        let test = $(`#${i}`).find("span").text();
        console.log(test);

    };

//    let a =  $(".name").find("span")


})