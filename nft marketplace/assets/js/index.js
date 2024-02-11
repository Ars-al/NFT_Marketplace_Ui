$('.slider-single').slick({
    slidesToShow: 3,
    arrows: false,
    fade: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 10000,
    centerMode: true,
    centerPadding: '10px',
    autoplay: true,
    swipeToSlide: true,
    useTransform: true,
    vertical: true,
    cssEase: 'linear',
    responsive: [{
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
      }
    }]
  });


  (function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();