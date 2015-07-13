//When a Game begins, there should be a random number generated between 1-100.

//Game object will hold all Game related methods and variables

function Game() {
  this.guesses = [];
  this.numberOfGuesses = 5;
  this.numberToGuess = this.randomNumber();
}

Game.prototype.randomNumber = function() {
  return Math.floor(Math.random()*100);
};


Game.prototype.output = function(string) {
  $("#outputText").text(string);
  $("#guessLeft").text("Guesses left: " + this.numberOfGuesses);
  $("#guesses").text("Guessed already: " + this.guesses);
};

//Allow the user to guess only a certain amount of times. When they run out of guesses let them know the Game is over.
Game.prototype.turnsLeft = function() {
  if(this.numberOfGuesses === 0) {
    this.output("The game is over, click play again to try a new game");
    return false;
  } else return true;
};

//After the user submits a guess, indicate whether their guess is 'hot' or 'cold'. Let the user know if they need to guess higher or lower.

Game.prototype.checkGuess = function(number) {
  if(number === this.numberToGuess) {
    this.output("you got it!");
    this.numberOfGuesses = 0;
  } else {
      if(number < (this.numberToGuess - 95))
        this.output("You're a glacier, not even sure how you guessed so wrong. Guess way way way higher");

      else if(number > (this.numberToGuess + 95))
        this.output("You're a glacier, not even sure how you guessed so wrong. Guess way way way lower");

      else if( number < (this.numberToGuess - 75))
        this.output("You're nearly frozen, Guess alot higher");

      else if( number > (this.numberToGuess + 75))
        this.output("You're nearly frozen, Guess alot lower");

      else if( number < (this.numberToGuess - 50))
        this.output("You're pretty darn cold, Guess a good bit higher");

      else if( number > (this.numberToGuess + 50))
        this.output("You're pretty darn cold, Guess a good bit lower");

      else if( number < (this.numberToGuess - 35))
        this.output("You're cold, Guess higher");

      else if( number > (this.numberToGuess + 35))
          this.output("You're cold, Guess lower");

      else if( number < (this.numberToGuess - 20))
          this.output("You're warming up, Guess a bit higher");

      else if( number > (this.numberToGuess + 20))
          this.output("You're warnming up, Guess a bit lower");

      else if( number < (this.numberToGuess - 10))
          this.output("You're hot, Guess a little higher");

      else if( number > (this.numberToGuess + 10))
          this.output("You're hot, Guess a little lower");

      else if( number < (this.numberToGuess - 5))
          this.output("You're smoking, Guess a small bit higher");

      else if( number > (this.numberToGuess + 5))
          this.output("You're smoking, Guess a small bit lower");

      else if( number < (this.numberToGuess - 2))
          this.output("You're very hot, Guess a small bit higher");

      else if( number > (this.numberToGuess + 2))
          this.output("You're very hot, Guess a small bit lower");

      else if( number === (this.numberToGuess - 1))
          this.output("You're on fire!!! AHHHH, Call the fire department and also guess a washington higher");

      else if( number === (this.numberToGuess + 1))
          this.output("You're on fire!!! AHHHH, Call the fire department and also guess a washington lower");

  }
}


//Validate inputs that they are real numbers between 1-100.
Game.prototype.checkIfNumber = function(number) {
  if(typeof(number) === "number" && number >=1 || number <=100) {
    return true;
  } else {
    this.output("Please enter a number between 1 and 100");
    return false;
  }
};
//Create a button that provides the answer (Give me a Hint).
Game.prototype.giveAnswer = function() {
    this.output("Answer was: " + this.numberToGuess);
    this.numberOfGuesses = 0;
};

Game.prototype.guess = function(number) {
  if(this.turnsLeft()) {
    if(!($.inArray(number, this.guesses) > 0)) {
      if(this.checkIfNumber(number)) {
        number = parseInt(number);
        this.numberOfGuesses --;
        this.guesses.push(number);
        this.checkGuess(number);
      }
    } else {
      this.output("You have already guessed that number");
    }
  }
};

var game = new Game();
game.output("Guess a number between 1 - 100");

$("#newGame").click(function() {
  game = new Game();
  game.output("New Game");
});

$("#submitInput").click(function() {
  if($("#numberInput").val() === "") {
    alert("You must enter something to guess!");
  } else {
    game.guess($("#numberInput").val());
    $("#numberInput").val("");
  }
});

$("#answer").click(function() {
  game.giveAnswer();
});
