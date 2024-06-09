// Get references to HTML elements
const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');
const resultDisplay = document.querySelector('#result');
const myScoreDisplay = document.querySelector('#myScore');
const computerScoreDisplay = document.querySelector('#computerScore');

// Initialize scores
let myScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine winner of a round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        myScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

// Function to update scores and display result
function updateScoreAndResult(result) {
    resultDisplay.textContent = result;
    myScoreDisplay.textContent = `Your score: ${myScore}`;
    computerScoreDisplay.textContent = `Computer score: ${computerScore}`;
}

// Event listeners for player's choices
rock_btn.addEventListener('click', () => {
    const playerSelection = 'rock';
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateScoreAndResult(result);
});

paper_btn.addEventListener('click', () => {
    const playerSelection = 'paper';
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateScoreAndResult(result);
});

scissors_btn.addEventListener('click', () => {
    const playerSelection = 'scissors';
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    updateScoreAndResult(result);
});
