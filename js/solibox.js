$(document).on("scroll", function () {
    if
        ($(document).scrollTop() > 100) {
        $("#banner").addClass("shrink");
    }
    else {
        $("#banner").removeClass("shrink");
    }
    
});

$.material.init();

$(document).ready(function () {
    $('.nav-link').click(function () {
        var divId = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(divId).offset().top - 120
        }, 200);
    });
    $('.mobile-link').click(function () {
        $('#menu-responsive').click();
    });
    $('.nav-button').click(function () {
        $('body').toggleClass('nav-open');
    });
    $('#certificados-carousel').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    });

    

    var $servSlider = $('#servicios-slider');

    // if ($servSlider.length) {
    //     var currentSlide;
    //     var slidesCount;
    //     var sliderCounter = document.createElement('div');
    //     sliderCounter.classList.add('slider-counter');

    //     var updateSliderCounter = function (slick, currentIndex) {
    //         currentSlide = slick.slickCurrentSlide() + 1;
    //         slidesCount = slick.slideCount;
    //         $(sliderCounter).text(currentSlide + '/' + slidesCount)
    //     };

    //     $servSlider.on('init', function (event, slick) {
    //         $servSlider.append(sliderCounter);
    //         updateSliderCounter(slick);
    //     });

    //     $servSlider.on('afterChange', function (event, slick, currentSlide) {
    //         updateSliderCounter(slick, currentSlide);
    //     });

    //     $servSlider.slick({
    //         dots: false,
    //         infinite: false,
    //         speed: 300,
    //         slidesToShow: 1,
    //         centerMode: false,
    //         variableWidth: true,
    //         responsive: [{
    //                 breakpoint: 1200,
    //                 settings: {
    //                     centerMode: true,
    //                     variableWidth: false
    //                 }
    //             }
    //         ]
    //     });
    // }
    $servSlider.slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                centerMode: false,
                variableWidth: false
            }
        }
        ]
    });




});