
pg = pg || {};
pg.page = pg.page || {};

$(function() {
  pg.page.index = function() {
    var
      playButton1 = new pg.widget.playButton(),
      playButton2 = new pg.widget.playButton();
      
      resetAll = function() {
        playButton1.resetAllButtons();
        playButton2.resetAllButtons();
      };
    
    playButton1.init('[data-bttn-play]');
    playButton2.init('[data-bttn-play-2]');
    
    return {
      resetAll: resetAll
    };
  }();
});