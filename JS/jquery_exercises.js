// $("#thediv").css("background-color", "papayawhip");
//
// $("#theList").css("background-color", "yellow");
// $('*').css('border', '1px solid #F00');

// $("li").css("font-size", "20px");
// $("li, h1, p").css("background-color", "yellow");
// $(".theTitle").each(function() {
//     alert("Things you cannot do");
// });

$("h1").click(function(){
        $(this).css('background-color', 'blue');
});

$("p").dblclick(function(){
    $(this).css("font-size", "18px")
});

$("li").mouseover(function(){
    $(this).css("color", "red")
});
$("li").mouseleave(function(){
    $(this).css("color", "black")
});