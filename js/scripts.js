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
    $('.menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
    });
    
    var submenu =  $('.sub-menu');
    var menuChildren = $('.menu-item-has-children');
    
    
    menuChildren.on('click', function() {
        
        if ($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).find('.sub-menu').removeClass('open').slideUp();
        } else {
            $(this).addClass('active');
            $(this).find('.sub-menu').addClass('open').slideDown();
        }
        // $(this).find('.sub-menu').toggleClass('open').slideToggle();
    });
    
    $(document).on('click', function (e) {
    
        
            if (   !$('.menu-item-has-children a').is(e.target) ){
                    menuChildren.removeClass('active');
                    submenu.removeClass('open').slideUp();
            }
    
    });
    
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
    var regions = $('#map path.st4');
    var cards = $('.map__cards li')
    
    var cities = $('.map__list li');
    
    
    cities.on('mouseenter click', function(){
        var city = $(this).data('city');
        var region = $(this).data('region');
    
        for(var i = 0; i < cities.length; i++){
    
            cities[i].classList.remove('active');
    
            if(cities[i].getAttribute('data-city') == city){
                cities[i].classList.add('active');
            }
    
        }
        
        for(var i = 0; i < regions.length; i++){
            
            regions[i].classList.remove('map__active');
    
            if(regions[i].getAttribute('id') == region){
                regions[i].classList.add('map__active')
            }
    
        }
    
        for(var i = 0; i < cards.length; i++){
    
            cards[i].classList.remove('show');
    
            if(cards[i].getAttribute('data-card') == city){
                cards[i].classList.add('show');
            }
    
        }
        
    });
    
    regions.on('mouseenter click', function(e){
        var chooseReg = e.target.getAttribute('id');
    
        for(var i = 0; i < regions.length; i++){
            regions[i].classList.remove('map__active');
    
            if(regions[i].getAttribute('id') == chooseReg){
                regions[i].classList.add('map__active')
            }
        }
    
        for(var i = 0; i < cards.length; i++){
    
            cards[i].classList.remove('show');
    
            if(cards[i].getAttribute('data-card') == chooseReg){
                cards[i].classList.add('show');
            }
    
        }
    
        for(var i = 0; i < cities.length; i++){
    
            cities[i].classList.remove('active');
    
            if(cities[i].getAttribute('data-city') == chooseReg){
                cities[i].classList.add('active');
            }
    
        }
    });
    
    // cities.on('mouseleave', function(){
    //     for(var i = 0; i < cities.length; i++){
    //         cities[i].classList.remove('active');
    //     }
    
    //     for(var i = 0; i < regions.length; i++){
    //         regions[i].classList.remove('map__active');
    //     }
    
    //     for(var i = 0; i < cards.length; i++){
    //         cards[i].classList.remove('show');
    //     }
    // });
    
    // regions.on('mouseleave', function(){
    //     for(var i = 0; i < cities.length; i++){
    //         cities[i].classList.remove('active');
    //     }
    
    //     for(var i = 0; i < regions.length; i++){
    //         regions[i].classList.remove('map__active');
    //     }
    
    //     for(var i = 0; i < cards.length; i++){
    //         cards[i].classList.remove('show');
    //     }
    // });
});