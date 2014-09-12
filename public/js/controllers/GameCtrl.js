angular.module('myApp.controllers').controller('GameCtrl', function($scope, Game, Player, $http, $location) {
    
  $scope.player = new Player();

  $scope.game = new Game($scope.player);

  $scope.currentQuestion = $scope.game.askQuestion();

  $scope.$watch('currentQuestion', function(){
    $scope.choices = $scope.game.presentChoicesFor($scope.currentQuestion)
  });

  $scope.choose = function(choice){
    $scope.player.answer($scope.currentQuestion, choice);
    $scope.currentQuestion = $scope.game.askQuestion();
  };

  $scope.submitForm = function(){
    $http.post('/api/scores', {name: $scope.player.name, score: $scope.player.score})
    $location.url('/highscore')
  };


})