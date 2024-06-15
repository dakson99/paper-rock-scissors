"use strict";

const choice = ["rock", "paper", "scissors"];

// global variables
let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;

// functions
const computerPlay = function () {
  return choice[Math.floor(Math.random() * choice.length)];
};

const playRound = function (playerSelection, computerSelection) {
  // test for draw
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  )
    console.log("Draw");
  // test for player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log("Player Wins");

    // test for computer win
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    console.log("Computer Wins");
  }
};

const game = function () {
  for (let i = 0; i < 5; i++) {
    computerChoice = computerPlay();
    playerChoice = prompt(
      "Choose your destiny! Rock, Paper or Scissors?"
    ).toLowerCase();
    playRound(playerChoice, computerChoice);
  }

  if (computerScore > playerScore)
    console.log("Computer is the winner of the game");
  else if (playerScore > computerScore)
    console.log("Player is the winner of the game!");
  else console.log("It's a draw! We have no winner!");
};

game();
