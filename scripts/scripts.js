const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    winner();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  console.log(randomNumber);

  if (randomNumber === 0) {
    computerChoice = "rock";
  } else if (randomNumber === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function winner() {
  if (computerChoice === userChoice) {
    result = "it's a tie";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "yeah baby!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lose!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "Sad day!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "winner winner!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "ouch!";
  }

  resultDisplay.innerHTML = result;
}
