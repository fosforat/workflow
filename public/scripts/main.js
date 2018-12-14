$(function () {
    $('.partnersCarousel .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.awardsSlider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        //arrows: false,
        autoplay: true
    });

    $('.teamCarousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.referencesCarousel').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    $('.promoCarousel').slick({
        infinite: true,
        autoplay: true,
        arrow: false
    });

    $('.downloadSlider').slick({
        infinite: true,
        autoplay: false,
        prevArrow: $('.sliderArrow .left'),
        nextArrow: $('.sliderArrow .right')
    });
});