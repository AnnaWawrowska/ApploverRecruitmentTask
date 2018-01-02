
(function () {
  $(document).ready(function() {
    project.sliderInit();
    project.auth.addEventsListeners();

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
    },
    auth: {
      addEventsListeners: function() {
        $('#formSignUp').submit(function (event) {
          event.preventDefault();
          var email = $('#signUpEmail')[0].value;
          var password = $('#signUpPassword')[0].value;
          project.auth.register(email, password);
        })
      },
      register: function(email, password) {
        var data = {
          email: email,
          password: password
        };
        $.ajax({
          type: "POST",
          url: "https://foodsi-stage.applover.pl/api/v1/auth",
          data: JSON.stringify(data),
          contentType: "application/json",
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          processData: false,
          crossDomain: true,
          dataType: "json",
          success: function(data) {
            console.log('success');
            console.log(data);
          },
          error: function() {
            console.log('error');
          }
        });
      },
    }
  };
})();
