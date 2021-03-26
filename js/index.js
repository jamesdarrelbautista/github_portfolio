$(document).ready(function () {
    $("h1").hover(function () {
        $(this).animate({left: '150px'},'fast');
    },function () {
        $(this).animate({left: '-=150px'},'fast');
    });
});