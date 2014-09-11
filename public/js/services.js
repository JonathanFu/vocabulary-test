'use strict';

/* Services */


angular.module('myApp.services', [])
  .value('words', [{
    "en": "Good morning",
    "es": "Buenos días",
    def: "A conventional expression of greeting or farewell used in the morning."
  }, {
    "en": "Apple",
    "es": "Manzana",
    def: "The round fruit of an apple tree, which typically has thin green or red skin."
  }, {
    "en": "Brother",
    "es": "Hermano",
    def: "A man or boy in relation to other sons and daughters of his parents."
  }, {
    "en": "Red",
    "es": "Rojo",
    def: "The colour of blood, fire, or rubies."
  }, {
    "en": "Germany",
    "es": "Alemania",
    def: "A country in central Europe whose capital is Berlin. "
  }, {
    "en": "Seven",
    "es": "Siete",
    def: "A number equivalent to the sum of three and four."
  }, {
    "en": "Learn",
    "es": "Aprender",
    def: "Gain or acquire knowledge in something by study, experience, or being taught."
  }, {
    "en": "Sun",
    "es": "Sol",
    def: "The star round which the earth orbits."
  }, {
    "en": "House",
    "es": "Casa",
    def: "A building for human habitation."
  }, {
    "en": "Young",
    "es": "Joven",
    def: "Having lived or existed for only a short time."
  }, {
    "en": "Friendly",
    "es": "Amigable",
    def: "Kind and pleasant."
  }])

  .factory('Game', ['words', 'Question', 'Player', function(words, Question, Player){

    function Game(player){

      this.player = player;

      this.availableQuestions = _.map(words, function(word){
        return new Question(word["en"], word["es"], word["def"])
      })

      this.askedQuestions = [];

    };

    Game.prototype.ask = function(question) {
      var index = this.availableQuestions.indexOf(question);
      this.availableQuestions.splice(index, 1)
      this.askedQuestions.push(question)
    };

    Game.prototype.presentChoicesFor = function(question) {
      var array = [];
      array.push(question.answer);
      (this.askedQuestions.length > 0) ? array.push(_.sample(this.askedQuestions).answer) : array.push(_.sample(this.availableQuestions).answer)
      array.push(_.sample(this.availableQuestions).answer)
      return (_.uniq(array).length === 3) ? array : this.presentChoicesFor(question)
    };

    return Game;


  }])

  .factory('Question', ['words', function(words){


    function Question(englishWord, spanishWord, definition){
      this.whatIs = englishWord;
      this.answer = spanishWord;
      this.clue = definition;

    };


    return Question

  }]).factory('Player', ['Question', function(){

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
