
(function() {
  var cheese = true;
  var pants = 'ant';
  var getPants = function() {
    return pants;
  };
  
  
  if(egg) {
    pants = 'bee';
  }
  
  return {
    getPants: getPants
  };
})();