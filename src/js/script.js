$(document).ready(function(){
    
    $('.slider-audience').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-audience-nav'
    });

    $('.slider-audience-nav').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-audience',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 2
          }
        }
      ]
    });

    $( "#tabs" ).tabs();

    $('.main-nav .toggle, .main-nav .nav-close').click(function(){
      $('.main-nav .list').toggleClass('--active');
  });
});

$(window).scroll(function(){
  if ($(window).scrollTop() > 120) {
      $('.main-header').addClass('header-scroll');

  } else {
      $('.main-header').removeClass('header-scroll');
  }
});

