//When a game begins, there should be a random number generated between 1-100.

//Game object will hold all game related methods and variables
var game = {};

game.randomNumber = function() {
  return Math.floor(Math.random()*100);
}

game.numberToGuess = game.randomNumber();

game.numberOfGuesses = 5;

//Store all of the guesses and create a way to check if the guess is a repeat.
game.guesses = [];


//Allow the user to guess only a certain amount of times. When they run out of guesses let them know the game is over.
game.turnsLeft = function() {
  if(numberOfGuesses === 0) {
    //output: "Game Over, the number was 'number', click new game to play again"
    return false;
  } else return true;
}

//After the user submits a guess, indicate whether their guess is 'hot' or 'cold'. Let the user know if they need to guess higher or lower.
game.checkGuess = function(number) {
  if(number === game.numberToGuess) {
    //output: "You got it!"
    game.numberOfGuesses = 0;
  } else {
    switch(number) {
      case number < (game.numberToGuess-95):
        //output: "You're a glacier, not even sure how you guessed so wrong. Guess way way way higher"
        break;
      case number > (game.numberToGuess+95)
        //output: "You're a glacier, not even sure how you guessed so wrong. Guess way way way lower"
        break;
      case number < (game.numberToGuess-75)
        //output: "You're nearly frozen, Guess alot higher"
        break;
      case number > (game.numberToGuess+75):
        //output: "You're nearly frozen, Guess alot lower"
        break;
      case number < (game.numberToGuess-50):
        //output: "You're pretty darn cold, Guess a good bit higher";
        break;
      case number > (game.numberToGuess+50)
        //output: "You're pretty darn cold, Guess a good bit lower";
        break;
      case number < (game.numberToGuess - 35);
        //output: "You're cold, Guess higher";
        break;
      case number < (game.numberToGuess + 35);
          //output: "You're cold, Guess lower";
          break;
      case number < (game.numberToGuess - 20);
          //output: "You're warming up, Guess a bit lower";
          break;
      case number < (game.numberToGuess + 20);
          //output: "You're warnming up, Guess a bit higher";
          break;
      case number < (game.numberToGuess + 10);
          //output: "You're hot, Guess a little lower";
          break;
      case number < (game.numberToGuess - 10);
          //output: "You're hot, Guess a little higher";
          break;
      case number < (game.numberToGuess + 5);
          //output: "You're smocking, Guess a small bit lower";
          break;
      case number < (game.numberToGuess - 5);
          //output: "You're hot, Guess a small bit higher";
          break;
      case number < (game.numberToGuess + 2);
          //output: "You're smocking, Guess a small bit lower";
          break;
      case number < (game.numberToGuess - 2);
          //output: "You're smocking, Guess a small bit higher";
          break;
      case number === (game.numberToGuess + 1);
          //output: "You're on fire!!! AHHHH, Call the fire deport and also guess a washington smaller";
          break;
      case number === (game.numberToGuess - 1);
          //output: "You're on fire!!! AHHHH, Call the fire deport and also guess a washington smaller";
          break;
    }
  }
}
//Validate inputs that they are real numbers between 1-100.
game.checkIfNumber = function(number) {
  if(typeof number !== "number") {
    //output: "Please enter a valid number"
    //return false;
  } else if(number < 1 || number > 100) {
    //output: "Please enter a number between 1-100"
    //return false;
  }
  else {
    return true;
}
//Create a button that provides the answer (Give me a Hint).
game.giveAHint = function() {
  //output: game.numberToGuess;
  game.numberOfGuesses = 0;
}

game.previousAnswers = function() {
  //output: <ol><li>game.guesses[]</li></ol>
}


game.guess = function(number) {
  if(games.turnsLeft) {
    if($.inArray(number, game.guesses) > 0) {
      if(game.checkNumber(number));
        game.guesses.push(number);
        game.previousAnswers();
        game.numberOfGuesses --;
    } else {
      //output: you already guessed that number;
    }
  }
}



//The user should have an input field where they can submit a guess.

//Create a new game button that resets the game.

//Submit the guess by pressing enter or clicking the submit button.

//Change the background color, add an image, or do something creative when the user guesses the correct answer.
