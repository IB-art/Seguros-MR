$(function(){
  $('.menu__btn').on('click', function(){
    $('.header__contact').toggleClass('header__contact--active');
  });

  $('.rightside-menu__close').on('click', function(){
    $('.header__contact').toggleClass('header__contact--close');
  });
 
  $('.rightside-menu__close').on('click', function() {
    $('.header__contact').removeClass('header__contact--active');
  });

  // $('.info__items').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   tLoading: 'Loading image #%curr%...',
  //   mainClass: 'mfp-img-mobile',
  //   gallery: {
  //     enabled: true,
  //     navigateByImgClick: true,
  //     preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  //   },
  // });

  $('.slider__items').slick({
    prevArrow: '<button type="button" class="arrow-prev slick-arrow"><img src="images/arrow-right.png" alt=""></button>',
    nextArrow: '<button type="button" class="arrow-next slick-arrow slick-arrow--active"><img src="images/arrow-right.png" alt=""></button>',
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 565,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1.7
         
        }
      }
    ]
  });

 
  

});