$(document).ready(function () {
    // $("h1").hover(function () {
    //     $(this).animate({left: '30px'},'fast');
    // },function () {
    //     $(this).animate({left: '-=30px'},'fast');
    // });
    $('h1').click(function () {
        $("#pendleton").toggle(500);
        $("#james").toggle(500);   
    });

    $('div:first').hover(function () {
        $('div').removeClass("text-white bg-primary");
    }, function () {
        $('div').addClass("text-white bg-primary");
    });
});