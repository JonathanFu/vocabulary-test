describe("Service: Game", function () {
  var Game;
  var Question;
  var game;
  var words;

  beforeEach(module("myApp"));


  beforeEach(inject(function (_Game_, _Question_, _words_) {
    Game = _Game_;
    Question = _Question_;
    words = _words_;
  }));



  it('has 11 available questions', function(){

  	var game = new Game();
  	expect(game.availableQuestions.length).toEqual(11);
  	expect(game.availableQuestions[0]).toEqual(jasmine.any(Question))

  });

  it('has 0 asked questions', function(){
  	var game = new Game();
  	expect(game.askedQuestions.length).toEqual(0);
  });

  it('when asking a question, adds it to the list of unavailable questions', function(){
  	var game = new Game();
  	var question = new Question("hello", "hola", "greeting");
  	game.ask(question)
  	expect(game.availableQuestions).not.toContain(question);
  	expect(game.askedQuestions).toContain(question);
  });

  describe ("presenting choices", function(){

  	var game, question

  	beforeEach(function(){
	  	game = new Game();
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
	  	game.ask(question);
	  	var newQuestion = new Question("Apple", "Manzana", "fruit");
	  	var choices = game.presentChoicesFor(newQuestion);
	  	expect(choices).toContain("Alemania");
	  });


  });





});