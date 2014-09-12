angular.module('myApp.services').factory('Question', ['words', function(words){

  function Question(englishWord, spanishWord, definition){
    this.whatIs = englishWord;
    this.answer = spanishWord;
    this.clue = definition;

  };


  return Question

}]);