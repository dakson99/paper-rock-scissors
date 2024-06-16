"use strict";

// selectors
const container = document.querySelector(".container");
const message = document.querySelector(".message");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const allButtons = document.querySelector(".btn");

const labelPlayer = document.querySelector(".score--track--player");
const labelComputer = document.querySelector(".score--track--computer");
const btnsPlayAgain = document.querySelectorAll(".para-sub");
const overlay = document.querySelector(".overlay");
const playerDisplay = document.querySelector(".div--player");
const computerDisplay = document.querySelector(".div--computer");

// Store possible choices
const choice = ["rock", "paper", "scissors"];

// global variables
let playerScore = 0;
let computerScore = 0;

let playerChoice;
let computerChoice;
let clicked;
let playerPlay;
let compPlay;

// functions
const computerPlay = function () {
  return choice[Math.floor(Math.random() * choice.length)];
};

const displayScore = function () {
  labelPlayer.textContent = `Player score: ${playerScore}`;
  labelComputer.textContent = `Computer score: ${computerScore}`;
};

const displayMessage = function (msg) {
  message.textContent = msg;
};

const playRound = function (playerSelection, computerSelection) {
  // test for draw
  if (
    (playerSelection === "rock" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "scissors")
  )
    displayMessage("DRAW");
  // test for player win
  else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;

    displayMessage(`Player wins: ${playerPlay} beats ${compPlay}!`);

    // test for computer win
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    displayMessage(`Computer wins: ${compPlay} beats ${playerPlay}!`);
  }
};

container.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn")) {
    playerPlay = e.target.dataset.choice;

    // get computer random number each time, call playRound
    compPlay = computerPlay();
    playRound(playerPlay, compPlay);
  }
});

// DIsplay score
displayScore();

// Player wins
if (computerScore === 5) {
  displayMessage("COMPUTER WINS THE GAME");
  computerDisplay.classList.add("winner");
  overlay.classList.remove("hidden");
}

if (playerScore === 5) {
  displayMessage("YOU WIN THE GAME");
  playerDisplay.classList.add("winner");
  overlay.classList.remove("hidden");
}

// Reset game
btnsPlayAgain.forEach((el) =>
  el.addEventListener("click", function () {
    //
    // remove classes from overlay and winner message
    overlay.classList.add("hidden");
    computerDisplay.classList.remove("winner");
    playerDisplay.classList.remove("winner");

    // reset scores
    computerScore = 0;
    playerScore = 0;

    displayScore();
    displayMessage("Choose your destiny! Rock, Paper or Scissors");
  })
);
