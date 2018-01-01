
(function () {
  $(document).ready(function() {
    project.sliderInit();
  });

  var project = {
    sliderInit: function() {
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
              centerMode: true,
              centerPadding: '0',
              slidesToShow: 1,
              variableWidth: false,
              swipe: true,
            }
          },
        ]
      });
    }
  };
})();
