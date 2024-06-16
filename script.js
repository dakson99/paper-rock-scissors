"use strict";

// selectors
const container = document.querySelector(".container");
const message = document.querySelector(".message");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const allButtons = document.querySelector(".btn");

const overlay = document.querySelector(".overlay");
const playerDisplay = document.querySelector(".div--player");
const computerDisplay = document.querySelector(".div--computer");

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
    message.textContent = "DRAW";
  // test for player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;

    message.textContent = "PLAYER WINS";

    // test for computer win
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    message.textContent = "COMPUTER WINS";
  }
};

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    const clicked = e.target.dataset.choice;
    playRound(clicked, computerPlay());
  }
});

// Player wins
if (computerScore === 5) {
  message.textContent = "COMPUTER WINS THE GAME";
  computerDisplay.classList.add("winner");
  overlay.classList.remove("hidden");
}

if (playerScore === 5) {
  message.textContent = "PLAYER WIN THE GAME";
  playerDisplay.classList.add("winner");
  overlay.classList.remove("hidden");
}

// take e.target attribute

// run playRound with (clicked, computer)

// 1. add event listeners to buttons.

// when button clicked, playRound

// selection from round

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
