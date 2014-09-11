describe("Service: Player", function () {
  var Player;
  var Question;
  var player;
  var question;

  beforeEach(module("myApp"));

  beforeEach(inject(function (_Player_, _Question_) {
    Player = _Player_;
    Question = _Question_;
  }));

    beforeEach(function(){
      player = new Player();
      question = new Question("hello", "hola", "greeting");
    });

  it('has an initial score of 0', function(){
    expect(player.score).toEqual(0);
  });

  it('has not lost when he begins the game', function(){
      expect(player.hasLost).toBe(false);
  });

  it('has not won when he begins the game', function(){
    expect(player.hasWon).toBe(false);
  });

  it('correctly answering a question increments his score by 1', function(){
    player.answer(question, "hola");
    expect(player.score).toEqual(1);
  });

  it('loses when he incorrectly answers the question', function(){
    player.answer(question, "ja");
    expect(player.hasLost).toBe(true);
  });

  it('wins when his score is 3', function(){
    player.score = 2;
    player.answer(question, "hola")
    // console.log(player.score)
    expect(player.hasWon).toBe(true)
  });

});