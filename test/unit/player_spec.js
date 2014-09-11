describe("Service: Player", function () {
  var Player;
  var Question;

  beforeEach(module("myApp"));

  beforeEach(inject(function (_Player_, _Question_) {
    Player = _Player_;
    Question = _Question_;
  }));

  it('has an initial score of 0', function(){
    var player = new Player();
    expect(player.score).toEqual(0);
  });

  it('has not lost when he begins the game', function(){
      var player = new Player();
      expect(player.hasLost).toBe(false);
  });

  it('correctly answering a question increments his score by 1', function(){
    var player = new Player();
    var question = new Question("hello", "hola", "greeting");
    player.answer(question, "hola");
    expect(player.score).toEqual(1);
  });

  it('loses when he incorrectly answers the question', function(){
    var player = new Player();
    var question = new Question("hello", "hola", "greeting");
    player.answer(question, "ja");
    expect(player.hasLost).toBe(true);
  });

});