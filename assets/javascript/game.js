// Create an array of all possible choices
let possibleChoices = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
// Randomly choose one choice
let randomChoice = Math.floor(Math.random() * (possibleChoices.length - 1));

// Variables to hold a reference to the place in HTML
let winsText = document.getElementById("wins-text");
let lossesText = document.getElementById("losses-text");
let guessesLeft = document.getElementById("guesses-left");
let madeGuesses = document.getElementById("made-guesses");

// Variables to hold Wins/Losses/Guesses
let wins = 0;
let losses = 0;
let guessesRemaining = 9;
let guessesSoFar = [];

// Set Wins/Losses/Guesses to show immediately
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeft.textContent = "Guesses Left: " + guessesRemaining;
madeGuesses.textContent = "Guesses So Far: " + guessesSoFar;

// Have user make a guess
document.onkeyup = function(event) {
  let userGuess = event.key;


  if (userGuess === possibleChoices[randomChoice]) {
    wins++;
    guessesRemaining = 9;
    guessesSoFar = [];
  } else {
    guessesRemaining--;
    guessesSoFar.push(" " + userGuess);

    if (guessesRemaining === 0) {
      losses++;
      guessesRemaining = 9;
      guessesSoFar = [];
    }
    
  }

  winsText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesLeft.textContent = "Guesses Left: " + guessesRemaining;
  madeGuesses.textContent = "Guesses So Far: " + guessesSoFar;


}

// If guess is correct update Wins

// If guess is incorrect change guesses Left to -1 and add user's guess to an array

// When guesses left hits 0, update Losses