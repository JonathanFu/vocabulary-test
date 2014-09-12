'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('AppCtrl', function($scope, $http, Game) {

    $scope.testing = "hello"

    


    $http({
      method: 'GET',
      url: '/api/name'
    }).
    success(function(data, status, headers, config) {
      $scope.name = data.name;
    }).
    error(function(data, status, headers, config) {
      $scope.name = 'Error!'
    });

  }).controller('GameCtrl', function($scope, Game, Player) {
    
    var player = new Player();

    var game = new Game(player);

    var currentQuestion = game.askQuestion();

    $scope.currentQuestion = currentQuestion;

    console.log(game.presentChoicesFor(currentQuestion))

    // $scope.choices = game.presentChoicesFor(currentQuestion);

  }).controller('MyCtrl2', function($scope) {
    // write Ctrl here

  });