#Vocabulary Test

An AngularJS on Node test for a tech company to implement a simple Spanish vocabulary game. An exercise in object-oriented design for AngularJS and thorough test-driven development with Karma.

##Description

* Every round, the user is asked the meaning of an English word in Spanish, and is given the definition of the English word.
* S/he is given three choices: one is the answer; one is a randomly chosen word; the other is a randomly chosen word from a previously answered question.
* If the user chooses the wrong word, the game is finished.
* There are three rounds. Afterwards the user can enter his/her name and is taken to the High Score page of the app.

##Objectives

* To implement a clean app structure.
* To exercise object-oriented design in AngularJS.
* To correctly name and format code.
* To properly use Angular components such as services and directives.
* To test-drive the application with Karma tests.

##Architecture Decisions

* For the sake of simplicity and to make the code cleaner and more manageable, I decided to abstract all relevant classes (Game, Player, Question and Words) into separate services.
* I made the Game class in control of holding arrays of available questions and previously asked questions - allowing it to decide what choices to present to the user. The game is also in control of asking questions - when it removes a question from the available questions array, places it in the asked questions array, and returns the question.
* The words service, already hardcoded by the company, is an array of objects with the Spanish word, English word, and definition.
* The Question class merely turns objects from the words service into Question objects.
* The Player class is responsible for holding a score, knowing if it has won or lost, and answering questions.
* The Game Controller is responsible for instantiating a new game, a new player, processing the player's choice when s/he clicks on it, posting via $http the player's name and scores to the Node server upon receiving the name, and redirecting the user to the highscores page.
* The Highscore Controller gets via $http the scores from NodeJS memory and renders them to the page.
* There are no integration tests, as I thought the randomly chosen nature of the questions and choices would be very difficult to test.

##Running the app

```
git clone https://github.com/jpatel531/vocabulary-test.git
cd vocabulary-test
npm install
bower install
nodemon app.js
open http://locahost:3000
```

##Running unit tests

```
karma start test/karma.conf.js 
```

