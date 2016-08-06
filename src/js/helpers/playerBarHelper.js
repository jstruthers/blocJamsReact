
export class playerBarHelper {
  
  constructor() {
    scope.value = 0;
    scope.max = 100;
  }
  
  "use strict";
  
  // @function calculatePercent
  // @description Get mouse position from event parameter
  //              minus the distance from the left of the
  //              viewport to the beginning of the seekBar
  //              parameter.
  //
  //              Return this value (offsetX) divided by
  //              the total width of the seekBar parameter
  //              as a float between 0 and 1
  // @parameters {Object} seekBar, jQuery Object for DOM node
  //             {Object} event, returned from an eventListener
  
  calculatePercent (seekBar, event) {
    var offsetX = event.pageX - seekBar.offset().left,
        seekBarWidth = seekBar.width(),
        offsetXPercent = offsetX / seekBarWidth;
    
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(1, offsetXPercent);
    return offsetXPercent;
  }

        
  // @function percentString
  // @description Cast return value from
  //              `calculatePercent()` to string for
  //              CSS. Append percentage mark.
  // @returns {String}
        
  percentString() {
    var value = this.value,
        max = this.max,
        percent = value / max * 100;

    return percent + '%';
  }
        
        // @function fillStyle
        // @description Update `ng-style()` on div.fill
        // @returns {Object}
        
        scope.fillStyle = function () {
          return { width: percentString() };
        };
        
        // @function thumbStyle
        // @description Update `ng-style()` on div.thumb
        // @returns {Object}
        
        scope.thumbStyle = function () {
          return { left: percentString() };
        };
        
        // @function onClickSeekBar
        // @description Update scope.value to click position
        // @parameter {Object} return from ng-click event
        
        scope.onClickSeekBar = function(event) {
          var percent = calculatePercent(seekBar, event);
          scope.value = percent * scope.max;
          notifyOnChange(scope.value);
        };
        
        // @function trackThumb
        // @description Update scope.value while div.thumb
        //              is being dragged.
        // @parameter {Object} return from ng-mousedown event
        
        scope.trackThumb = function() {
          $document.bind('mousemove.thumb', function(event) {
            var percent = calculatePercent(seekBar, event);
            scope.$apply(function() {
              scope.value = percent * scope.max;
              notifyOnChange(scope.value);
            });
          });
          
          $document.bind('mouseup.thumb', function() {
            $document.unbind('mousemove.thumb');
            $document.unbind('mouseup.thumb');
          })
        }
      }
    }
  }
}