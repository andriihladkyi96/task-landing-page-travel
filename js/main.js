$(function(){
    $('.testimonials__slider').slick({
        arrows: true,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        responsive: []  
    });

    $('form').on('submit',function(e){
        e.preventDefault();
        var but = $(this).find('[type="submit"]').toggleClass('sending').blur();
        
        setTimeout(function(){
           but.removeClass('sending').blur();
        },4500);
        
      });
});

