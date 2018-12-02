$(function () {
    $('.partnersCarousel .slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    $('.teamCarousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '60px',
    });
});