let playerChoiceDisplay = document.querySelector("#myChoiceDisplay");

let ComputerChoiceDisplay = document.querySelector("#ComputerChoiceDisplay");

let resultDisplay = document.querySelector("#resultDisplay");

let choices = document.querySelectorAll("button");

choices.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerChoice;
    if (e.target.id === "rock") {
      playerChoice = "rock";
      playerChoiceDisplay.innerHTML = `Your choice:${playerChoice}`;
    } else if (e.target.id === "paper") {
      playerChoice = "paper";
      playerChoiceDisplay.innerHTML = `Your choice:${playerChoice}`;
    } else if (e.target.id === "scissors") {
      playerChoice = "scissors";
      playerChoiceDisplay.innerHTML = `Your choice:${playerChoice}`;
    }
    let ComputerChoice = getComputerChoice();
    ComputerChoiceDisplay.innerHTML = `Compter Choice:${ComputerChoice}`;
    displayingResult(playerChoice, ComputerChoice);
  });
});

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function displayingResult(playerChoice, ComputerChoice) {
  if (playerChoice === ComputerChoice) {
    resultDisplay.innerHTML = "its a draw";
  } else if (
    (playerChoice === "rock" && ComputerChoice === "scissors") ||
    (playerChoice === "paper" && ComputerChoice === "rock") ||
    (playerChoice === "scissors" && ComputerChoice === "paper")
  ) {
    resultDisplay.innerHTML ="You won"
  }else{
    resultDisplay.innerHTML ="Computer won"
  }
}
