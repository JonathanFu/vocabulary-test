angular.module('myApp.services').factory('Player', ['Question', function(){

  function Player(){

    this.score = 0;
    this.hasLost = false;
    this.hasWon = false;

  };

  Player.prototype.answer = function(question, selection) {
    if (selection === question.answer) { 
      this.score ++ 
      this.hasWon = (this.score === 3) ? true : false
    } else {
      this.hasLost = true;
    }
  };


  return Player


}]);
