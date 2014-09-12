angular.module('myApp.services').factory('Game', ['words', 'Question', 'Player', function(words, Question, Player){

  function Game(player){

    this.player = player;

    this.availableQuestions = _.map(words, function(word){
      return new Question(word["en"], word["es"], word["def"])
    })

    this.askedQuestions = [];

  };

  Game.prototype.askQuestion = function() {
    var question = _.sample(this.availableQuestions);
    var index = this.availableQuestions.indexOf(question);
    this.availableQuestions.splice(index, 1);
    this.askedQuestions.push(question);
    return question
  };

  Game.prototype.presentChoicesFor = function(question) {
    var array = [question.answer];
    (this.askedQuestions.length > 1) ? array.push(_.sample(this.askedQuestions).answer) : array.push(_.sample(this.availableQuestions).answer)
    array.push(_.sample(this.availableQuestions).answer)
    return (_.uniq(array).length === 3) ? _.shuffle(array) : this.presentChoicesFor(question)
  };

  Game.prototype.isOver = function() {
    return (this.player.hasLost || this.player.hasWon)
  };

  return Game;


  }])