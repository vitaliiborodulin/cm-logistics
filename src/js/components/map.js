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