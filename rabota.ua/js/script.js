// scroll-display:none-.up-button
var $btnTop = $(".up-button")
$(window).on("scroll" ,function(){
    if ($(window).scrollTop() >= 25){
        $btnTop.fadeIn();
    }else{
        $btnTop.fadeOut();
    }
});
// scroll-to-TOP:0 -- speed:5000
$btnTop.on("click",function(){
    $("html,body").animate({scrollTop:0},3000)
});


//Menu
