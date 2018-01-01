
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
        axios.post('https://foodsi-stage.applover.pl/api/v1/auth', data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
        // $.ajax({
        //   url: 'https://foodsi-stage.applover.pl/api/v1/auth',
        //   type: 'POST',
        //   crossDomain: true,
        //   dataType: 'json',
        //   headers: { 'Acces-Control-Allow-Origin': '*'},
        //   data: JSON.stringify(data),
        //   done: function(data) {
        //     console.log('success');
        //     console.log(data);
        //   },
        //   fail: function(param1, param2, param3) {
        //     console.log('error');
        //     console.log('param 1:', param1);
        //     console.log('param 2:', param2);
        //     console.log('param 3:', param3.Message);
        //   }
        // });
      },

    }
  };
})();
