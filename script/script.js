$(function() {
  $(".rev_slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",

    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeught: true,
    },
  });
})
