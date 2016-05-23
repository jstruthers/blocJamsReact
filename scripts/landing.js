var animatePoints = function () {

  "use strict";

  var points = document.getElementsByClassName('point'),
    revealPoints = function () {
      var i = 0;
      for (i; i < points.length; i += 1) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0)";
        points[i].style.msTransform = "scaleX(1) translateY(0)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
      }
    };

  revealPoints();

},

  animateHero = function () {

    "use strict";

    var heroTitle = document.getElementsByClassName("hero-title");

    heroTitle[0].style.opacity = 1;
    heroTitle[0].style.letterSpacing = "0.5rem";

  };