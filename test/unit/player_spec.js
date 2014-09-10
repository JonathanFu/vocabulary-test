describe("Service: Player", function () {
  var Player;

  beforeEach(module("myApp"));


  beforeEach(inject(function (_Player_) {
    Player = _Player_;
  }));

  it('has an initial score of 0', function(){
    var player = new Player();
    expect(player.score).toEqual(0);
  });

  it('correctly answering a question increments his score by 1', function(){
    var player = new Player();
    var question = new Question("hello", "hola", "greeting");
    player.answer(question, "hola");
    expect(player.score).toEqual(1);
  });

});