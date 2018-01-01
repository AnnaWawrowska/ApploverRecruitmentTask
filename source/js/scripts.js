
$(document).ready(function() {
  $('.allOffers').slick({
    centerMode: true,
    slidesToShow: 3,
    variableWidth: true,
    prevArrow: '.slider__arrow--prev',
    nextArrow: '.slider__arrow--next',
    swipe: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          // arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
          variableWidth: false,
          swipe: true,
        }
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     arrows: false,
      //     centerMode: true,
      //     centerPadding: '40px',
      //     slidesToShow: 1
      //   }
      // }
    ]
  });
})
