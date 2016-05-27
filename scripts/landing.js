var animatePoints = function () {

  function revealPoint () {

    $(this).css({
      opacity: 1,
      transform: 'scaleX(1) translateY(0)'
    });
  }

  $.each($('.point'), revealPoint);

},

  animateHero = function () {

    $('.hero-title').css({
      opacity: 1,
      letterSpacing: '0.5rem'
    });

  };

$(window).load(function () {

  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

  animateHero();

  if ($(window).height > 950)
    animatePoints();

  $(window).scroll(function(event) {
    
    if ($(window).scrollTop() >= scrollDistance)
      animatePoints();
  });
});