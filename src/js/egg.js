
(function() {
  var egg = true;
  var parsnip = 'ant';
  var getParsnip = function() {
    return parsnip;
  };
  
  
  if(egg) {
    parsnip = 'bee';
  }
  
  return {
    getParsnip: getParsnip
  };
})();