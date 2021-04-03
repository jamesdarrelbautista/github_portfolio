$(document).ready(function () {
    // $("h1").hover(function () {
    //     $(this).animate({left: '30px'},'fast');
    // },function () {
    //     $(this).animate({left: '-=30px'},'fast');
    // });
    // $('h1').click(function () {
    //     $("#pendleton").toggle(500);
    //     $("#james").toggle(500);   
    // });

    // $('div:first').hover(function () {
    //     $('div').removeClass("text-white bg-primary");
    // }, function () {
    //     $('div').addClass("text-white bg-primary");
    // });
    $('h1').fadeIn(500,function () {
        $('#james').animate({
            fontSize: '80px'
        },2500,function () {
            $('#conan').fadeIn(900);  
            $('.intro').slideDown("slow");
        });
    })
    
});