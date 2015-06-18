

var egg = angular.module('myFirstApp', []);

egg.controller('myFirstController', [function() {
  var $scope = this;
  $scope.result = "FUCKING RESULT";
  $scope.shoutLoud = function() {
    alert('OI what the fuck are you doing you SI');
  };
}]);