describe("Service: Game", function () {
  var Game;
  var Question;
  var game;

  beforeEach(module("myApp"));


  beforeEach(inject(function (_Game_) {
    Game = _Game_;
  }));



  it('has 11 available questions', function(){

  	var game = new Game();
  	expect(game.availableQuestions.length).toEqual(11);

  });

  it('has 0 asked questions', function(){
  	var game = new Game();
  	expect(game.askedQuestions.length).toEqual(0);
  });



});