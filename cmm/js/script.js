/*=====================================Меню-бургер==============================*/


$(document).ready(function() {
    $('.menu__burger').click(function(event) {
        $('.menu__burger, .nav_menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});

$(document).ready(function() {
    $('.menu').click(function(event) {
        $('.menu__burger, .nav_menu').removeClass('active');
        $('body').removeClass('lock')
    });
});

/*=====================================Открытие нового калькулятора==============================*/
$(document).ready(function() {
    $('.left__block_item_1').click(function(event) {
        $('.center__block_2, .center__block_3, .center__block_4, .center__block_5, .left__block_item_2, .left__block_item_3, .left__block_item_4, .left__block_item_5').removeClass('active');
        $('.left__block_item_1, .center__block_1').toggleClass('active');
    });
});
$(document).ready(function() {
    $('.left__block_item_2').click(function(event) {
        $('.center__block_1, .center__block_3, .center__block_4, .center__block_5, .left__block_item_1, .left__block_item_3, .left__block_item_4, .left__block_item_5').removeClass('active');
        $('.left__block_item_2, .center__block_2').toggleClass('active');
    });
});
$(document).ready(function() {
    $('.left__block_item_3').click(function(event) {
        $('.center__block_1, .center__block_2, .center__block_4, .center__block_5, .left__block_item_1, .left__block_item_2, .left__block_item_4, .left__block_item_5').removeClass('active');
        $('.left__block_item_3, .center__block_3').toggleClass('active');
    });
});
$(document).ready(function() {
    $('.left__block_item_4').click(function(event) {
        $('.center__block_1, .center__block_2, .center__block_3, .center__block_5, .left__block_item_1, .left__block_item_2, .left__block_item_3, .left__block_item_5').removeClass('active');
        $('.left__block_item_4, .center__block_4').toggleClass('active');
    });
});
$(document).ready(function() {
    $('.left__block_item_5').click(function(event) {
        $('.center__block_1, .center__block_2, .center__block_3, .center__block_4, .left__block_item_1, .left__block_item_2, .left__block_item_3, .left__block_item_4').removeClass('active');
        $('.left__block_item_5, .center__block_5').toggleClass('active');
    });
});

