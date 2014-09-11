describe("Service: Game", function () {
  var Game;
  var Question;
  var game;
  var words;
  var Player;
  var player;
  var question

  beforeEach(module("myApp"));


  beforeEach(inject(function (_Game_, _Question_, _words_, _Player_) {
    Game = _Game_;
    Question = _Question_;
    words = _words_;
    Player = _Player_;
  }));

  	beforeEach(function(){
  		player = new Player();
	  	game = new Game(player);
	  	question = new Question("hello", "hola", "greeting");
  	});

  it('has a player', function(){
  	expect(game.player).toEqual(player)
  });


  it('has 11 available questions', function(){
  	expect(game.availableQuestions.length).toEqual(11);
  	expect(game.availableQuestions[0]).toEqual(jasmine.any(Question))

  });

  it('has 0 asked questions', function(){
  	expect(game.askedQuestions.length).toEqual(0);
  });

  it('when asking a question, adds it to the list of unavailable questions', function(){
  	var game = new Game();
  	var question = new Question("hello", "hola", "greeting");
  	game.askQuestion()
  	// expect(game.availableQuestions).not.toContain(question);
    expect(game.availableQuestions.length).toEqual(10);
  	expect(game.askedQuestions.length).toEqual(1);
  });

  it('is finished when a player has lost', function(){
  	game.player.answer(question, "si");
  	expect(game.isOver()).toBe(true);
  });

  it('is finished after the player has answered all three questions', function(){
  	game.player.score = 2
  	game.player.answer(question, "hola")
  	expect(game.isOver()).toBe(true)
  });

  describe ("presenting choices", function(){

  	var question

  	beforeEach(function(){
	  	question = new Question("Germany", "Alemania", "Country");
  	});

	  it('when presenting choices for the first question, picks two randomly chosen words plus the answer', function(){

	  	var choices = game.presentChoicesFor(question)
	  	expect(choices.length).toEqual(3);
	  	expect(choices).toContain("Alemania");
	  	var allWords = _.map(words, function(word){return word["es"]});
	  	var intersection = _.intersection(allWords, choices);
	  	expect(intersection.length).toEqual(3);

 		 });

	  it('must be unique', function(){
	  	var choices = game.presentChoicesFor(question);
	  	expect(_.uniq(choices).length).toEqual(3);
	  });

	  it('if there is a previously asked question, contain one of those answers', function(){
	  	game.askQuestion();
      var previousAnswer = game.askedQuestions[0].answer
	  	var newQuestion = new Question("Apple", "Manzana", "fruit");
	  	var choices = game.presentChoicesFor(newQuestion);
	  	expect(choices).toContain(previousAnswer);
	  });


  });





});