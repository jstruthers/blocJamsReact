
/**************************************
*   TIMECODE
**************************************/
export function timecode(duration) {
  let seconds = Number.parseFloat(duration)

  if (Number.isNaN(seconds)) {
    return '-:--';
  }

  let wholeSeconds = Math.floor(seconds),
      minutes = Math.floor(wholeSeconds / 60),
      remainingSeconds = wholeSeconds % 60,
      output = minutes + ':'

  if (remainingSeconds < 10) {
    output += '0'
  }

  return output + remainingSeconds
}

/**************************************
*   UPDATE_SEEKBAR_STYLES
**************************************/

export function updateStyle(current, total) {
  
  let seekBarFillRatio = current / total,
      offsetXPercent = seekBarFillRatio * 100

  offsetXPercent = Math.max(0, offsetXPercent)
  offsetXPercent = Math.min(100, offsetXPercent)

  let percentageString = Math.floor(offsetXPercent) + '%'

  // [ class fill, class thumb ]
  return [{ width: percentageString }, { left: percentageString }]
}

/**************************************
*   ANIMATE_POINTS
**************************************/
//
//var animatePoints = function () {
//
//  function revealPoint () {
//
//    $(this).css({
//      opacity: 1,
//      transform: 'scaleX(1) translateY(0)'
//    });
//  }
//
//  $.each($('.point'), revealPoint);
//
//},
//
//  animateHero = function () {
//
//    $('.hero-title').css({
//      opacity: 1,
//      letterSpacing: '0.5rem'
//    });
//
//  };
//
//$(window).load(function () {
//
//  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
//
//  animateHero();
//
//  if ($(window).height > 950)
//    animatePoints();
//
//  $(window).scroll(function(event) {
//    
//    if ($(window).scrollTop() >= scrollDistance)
//      animatePoints();
//  });
//});
