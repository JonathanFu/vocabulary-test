angular.module('myApp.controllers').controller('HighscoreCtrl', function($scope, $http) {
    
  $http.get('/api/scores').success(function(data){
    $scope.players = data;
  });

});