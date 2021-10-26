$(function(){
    $('.testimonials__slider').slick({
        arrows: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    arrows: false,
                }
              },
        ]  
    });
    $('.menu__btn').on('click',function(){
        $('.menu').toggleClass('menu--active')
    });
});

