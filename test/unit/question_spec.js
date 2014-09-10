describe("Service: Question", function () {
  var Question;

  beforeEach(module("myApp"));


  beforeEach(inject(function (_Question_) {
    Question = _Question_;
  }));

  it('is initialized with an english word, spanish word, and definition', function(){
  	var question = new Question("hello", "hola", "greeting");
  	expect(question.whatIs).toEqual("hello");
  	expect(question.answer).toEqual("hola");
  	expect(question.clue).toEqual("greeting")
  });

});