$(function () {

    function sliderInit() {

        var sliders = [];

        var slider_opt = {
          wrapperClass: 'bx-custom',
                    pager: false,
                    auto:true,
                    nextText:"",
                    prevText:"",
                    responsive: false
        };
        if ($(window).width() < 992) {
           $('.bxslider').each(function (i, el) {
              sliders.push($(el).bxSlider(slider_opt))
            });
        }

        $(window).on("resize", function () {
          
          if ($(window).width() < 992 && !sliders.length) {
            
            $('.bxslider').each(function (i, el) {
              sliders.push($(el).bxSlider(slider_opt))
            });
            return;
          }

          if ($(window).width() >= 992 && sliders.length) {

            sliders.forEach(function (slider) {
              slider.destroySlider()
            });
            
            sliders = [];
            return;
          }
        });

      }
    sliderInit();


    $('.pre_toform').on("click", function () {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 30
        }, 1500);
        return false;

    });
  
  function videoInit(videoId) {
    var video = document.getElementById(videoId);
    $(video).on('click tap', function(){
      video.play();
      $(this).attr('controls','controls');
      
    });
  }
  videoInit("firstVideo");
  videoInit("secondVideo");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 400) {
      $(".ordertop").fadeIn(500);
    } else {
      $(".ordertop").fadeOut(500);
    }
  });


});
