$(function(){
  
  // Header
  $(window).scroll(function(){
    const pos_T = $(this).scrollTop();
    if(pos_T > 50) {
      $('header, .gototop').addClass('active');
    }
    else {
      $('header, .gototop').removeClass('active');
    }
    
  });
  // Trigger
  $('.trigger').click(function(){
    $('.gnb').toggleClass('active');
  });
  $('section, .menu > a').click(function(){
    $('.gnb').removeClass('active');
  });

  // Smooth scrolling
  $('.menu > a, .gototop').click(function(e) {
    $.scrollTo(this.hash || 0, 900);
    // e.preventDefault();
    // $.scrollTo(0, 900);
  });

  // Slick.js : history
  $('.history-slider').slick({
    dots: true,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // Slick.js : project photo
  $('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear'
  });

});