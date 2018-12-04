$(function () {
    $('.partnersCarousel .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
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

    var promoCarousel = $('.promoCarousel').slick({
        infinite: true,
        autoplay: true,
        prevArrow: $('.sliderArrow .left'),
        nextArrow: $('.sliderArrow .right')
    });
});