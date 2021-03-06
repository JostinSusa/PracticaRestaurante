$(document).ready(function(){
    $('.menu a').each(function(index, elemento){
        $(this).css({
            'top': '-200px'
        });
        $(this).animate({
            top: '0'
        },2000 + (index * 500));
    });

    // Efectos Header ************** ************* ************

    if($(window).width()>800){
        $('header .textos').css({
            opacity: '0',
            marginTop: '0'
        });
        $('header .textos').animate({
            opacity: '1',
            marginTop: '-52px'
        },2000);
    }

    // Efectos navbar ********* ************ ************
    var acerca_de = $('#acerca-de').offset().top;
        menu = $('#menu').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: acerca_de - 100
        },1000);
    });
    $('#btn-menu').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: menu 
        },1000);
    }); 
    $('#btn-galeria').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: galeria 
        },1000);
    }); 
    $('#btn-ubicacion').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: ubicacion
        },1000);
    });

    // Paralax ************* ***************** *******************

    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            var scroll = $(window).scrollTop();

            $('header .textos').css({
                'transform': 'translate(0px, ' + scroll / 2 + '%)'
            });   

            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 6 +'%)'
            });
        }
    });

    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('header .textos').css({
                'transform': 'translate(0px, 0px)'
            });   

            $('.acerca-de article').css({
                'transform': 'translate(0px, 0px)'
            });
        }
    });
});