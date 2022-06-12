const burger = $('.header__burger');
const menu = $('.menu__wrapper');
// const bg = $('.menu__outer');

burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('header__burger--close');
    menu.toggleClass('open');
    // bg.toggleClass('bg');
    // $('html, body').toggleClass('overflow');
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('open');
        burger.removeClass('header__burger--close');
    }
});

// $('body').on('click', '.header__menu a[href*="#"]', function(e) {
//     var fixed_offset = 70;

//     $('html,body').stop().animate({
//         scrollTop: $(this.hash).offset().top - fixed_offset
//     }, 300);
//     e.preventDefault();
//     burger.toggleClass('header__burger--close');
//     menu.toggleClass('nav--open');
// });