$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1) {
            $('.header').addClass("sticky");
        } else {
            $('.header').removeClass("sticky");
        }
    });
    const burger = $('.header__burger');
    const menu = $('.menu__wrapper');
    
    burger.on('click', function(e) {
        e.preventDefault();
        burger.toggleClass('header__burger--close');
        menu.toggleClass('open');
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
    $('.menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
    });
    
    var submenu =  $('.sub-menu');
    var menuChildren = $('.menu-item-has-children');
    
    
    $('.menu-item-has-children').on('click', function() {
        
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.sub-menu').removeClass('open').slideUp();
        } else {
            $(this).addClass('active');
            $(this).find('.sub-menu').addClass('open').slideDown();
        }
        // $(this).find('.sub-menu').toggleClass('open').slideToggle();
    });
    
    // $(document).on('click', function (e) {
    //     if (   !submenu.is(e.target)  && menuChildren.hasClass('active') ) {
    //         submenu.toggleClass('open');
    //         menuChildren.toggleClass('active');
    //         console.log(1)
    //     }
    // });
    
    // !menuBtn.is(e.target) && && childMenu.has(e.target).length === 0
    
    // if ($(window).width() < 900) { 
    
        // $('.menu-item-has-children').on('click', function() {
        //     $(this).find('.sub-menu').slideToggle();
        // });
    
    // }
    
    // $(window).resize(function() {
    //     if ($(window).width() < 900) {
    
    //         $('.menu-item-has-children').on('click', function() {
    //             $(this).find('.sub-menu').slideToggle();
    //         });
    
    //     }
    // });
});