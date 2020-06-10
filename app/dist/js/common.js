$(function () {



    function videoInit() {

        var video_wrap = $('.v-video');
        var play = $('.js_v-play');
        var video = document.getElementById("main_video");

        play.on('click', function () {
            video.play();
            video_wrap.addClass('v-video_played')
        })

        video.addEventListener('ended', function () {
            video_wrap.removeClass('v-video_played')
        }, false);
    }

    function sliderInit() {
        var slider_active = false;
        var slider = {};
        if ($(window).width() < 992) {
            slider = $('.bx-slider').bxSlider({
                wrapperClass: 'bx-custom',
            });
            slider_active = true;
        }

        $(window).on("resize", function () {
            if ($(window).width() < 992 && slider_active == false) {
                slider = $('.bx-slider').bxSlider({
                    wrapperClass: 'bx-custom',
                });
                slider_active = true;
                return;
            }

            if ($(window).width() >= 992 && slider_active == true) {

                slider.destroySlider();
                slider_active = false;
                return;
            }
        });
    }
    
    videoInit();
    sliderInit();


    $('.pre_toform').on("click", function () {
        $("html, body").animate({
            scrollTop: $("form").offset().top - 30
        }, 1000);
        return false;

    });
    $('.to-video').on("click", function () {
        $("html, body").animate({
            scrollTop: $("video").offset().top - 30
        }, 1000);
        return false;

    });



});
