
pg = pg || {};
pg.widget = pg.widget || {};

$(function() {
  pg.widget.playButton = function() {
    var

      elementStr,
    
      resetAllButtons = function() {
        //console.log('resetting all buttons');
        $(elementStr).each(function() {
          $(this).data('resetBttn')();
        });
      },
    
      init = function(elementAttribute) {
        elementStr = elementAttribute;
        //elementAttribute like '[data-bttn-play]'
        $(elementStr).each(function(index, element) {
          var
            $this = $(element),
            $iconPlay = $this.find('[data-icon-play]'),
            $iconPause = $this.find('[data-icon-pause]'),
            $result = $('#status'),

            animationEndStr = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',

            state = 'pause', // play/pause

            renderState = function() {
              $result.html('State: ' + state);
            },

            resetBttn = function() {
              if(state === 'play') {
                state = 'pause';
                $this
                  .removeClass('bttnBaseZoomOut bttnBasePulseIn state-pause')
                  .addClass('bttnBaseZoomIn');
                $iconPlay
                  .removeClass('zoomOutBig')
                  .addClass('zoomInBig');
                $iconPause
                  .off()
                  .removeClass('pauseBigZoomIn')
                  .addClass('pauseBigZoomOut');
              }
            };

          $this.data('resetBttn',  resetBttn);

          renderState();

          $this.on('mouseenter', function() {
            if (state === 'pause') {
              $this
                .removeClass('bttnBaseZoomIn')
                .addClass('bttnBaseZoomOut');
            }
          });

          $this.on('mouseleave', function() {
            if (state === 'pause') {
              $this
                .removeClass('bttnBasePulseOut bttnBaseZoomOut')
                .addClass('bttnBaseZoomIn');
            }
          });

          $this.on('click', function() {
            if (state === 'pause') {
              resetAllButtons();

              $this
                .removeClass('bttnBasePulseOut')
                .addClass('bttnBasePulseIn');
              $iconPlay
                .removeClass('zoomInBig')
                .addClass('zoomOutBig');
              $iconPause
                .removeClass('pauseBigZoomOut')
                .addClass('pauseBigZoomIn');

              $iconPause.one(animationEndStr, function() {
                $this.addClass('state-pause');
              });
              state = 'play';
            }
            else {
              $this
                .removeClass('bttnBasePulseIn')
                .addClass('bttnBasePulseOut');
              $iconPlay
                .removeClass('zoomOutBig')
                .addClass('zoomInBig');
              $iconPause
                .removeClass('pauseBigZoomIn')
                .addClass('pauseBigZoomOut');

              $iconPause.one(animationEndStr, function() {
                $this.removeClass('state-pause');
              });
              state = 'pause';
            }
            renderState();
          });
        });
      };
    
    return {
      init: init,
      resetAllButtons: resetAllButtons
    };
  };
});