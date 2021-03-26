$(document).ready(function () {
    $("h1").hover(function () {
        $(this).animate({left: '30px'},'fast');
    },function () {
        $(this).animate({left: '-=30px'},'fast');
    });
});