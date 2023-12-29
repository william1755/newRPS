function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * rps.length);
    let randomString = rps[randomIndex]
    return randomString;
}

let computerChoice = getComputerChoice();

let rockPlayerBtn = document.getElementById('rockBtn');
let paperPlayerBtn = document.getElementById('paperBtn');
let scissorsPlayerBtn = document.getElementById('scissorsBtn');

let playerChoiceValue = 'undefined';
let computerChoiceValue = 'undefined';

function updatePlayerChoice(value) {
    playerChoiceValue = value;
    console.log('Player choice updated:', playerChoiceValue);
    return playerChoiceValue;
}

function updateComputerChoiceValue() {
    computerChoiceValue = getComputerChoice();
    console.log('Computer choice updated:', computerChoiceValue);
    return computerChoiceValue;
}

rockPlayerBtn.addEventListener('click', () => {
    updateComputerChoiceValue();
    updatePlayerChoice("rock");
    updateDisplay();
});

paperPlayerBtn.addEventListener('click', () => {
    updateComputerChoiceValue();
    updatePlayerChoice("paper");
    updateDisplay();
});

scissorsPlayerBtn.addEventListener('click', () => {
    updateComputerChoiceValue();
    updatePlayerChoice("scissors");
    updateDisplay();
});

function updateDisplay() {
    let playerChoice = document.getElementById('playerChoice');
    let computerChoice = document.getElementById('computerChoice');
    playerChoice.innerText = `You Chose: ${playerChoiceValue}`;
    computerChoice.innerText = ''; // Clear the computer's choice
}


// add current score
let playerScore = 0;
let computerScore = 0;

function updatePlayerScore() {
    console.log('Player score:', playerScore);
    console.log('Computer score:', computerScore);
    playerScoreTracker.textContent = `Your current score: ${playerScore}`;
    computerScoreTracker.textContent = `Computer's current score: ${computerScore}`;
}

let playerScoreTracker = document.getElementById('playerScore');
let computerScoreTracker = document.getElementById('computerScore');

let lockInBtn = document.getElementById('lockIn');
// lock in player's choice
lockInBtn.addEventListener('click', () => {
    updateDisplay();
    console.log(`You locked in ${playerChoiceValue}`);
    let compChoice = document.getElementById('computerChoice');
    compChoice.innerText = `Computer Chose: ${computerChoiceValue}`;
    let winnerDisplay = document.getElementById('winner');
    let winner = playGame(playerChoiceValue, computerChoiceValue);
    winnerDisplay.innerText = `The winner is: ${winner}`;

    if (playerScore === 5 || computerScore === 5) {
        // disable buttons to select choice
        rockPlayerBtn.disabled = true;
        paperPlayerBtn.disabled = true;
        scissorsPlayerBtn.disabled = true;
        lockInBtn.disabled = true;
    }
});

function playGame(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == 'paper') {
        computerScore++;
        updatePlayerScore();
        return 'Computer!';
    } else if (playerSelection == "rock" && computerSelection == 'scissors') {
        playerScore++;
        updatePlayerScore();
        return 'You!';
    } else if (playerSelection == "paper" && computerSelection == 'rock') {
        playerScore++;
        updatePlayerScore();
        return 'You!';
    } else if (playerSelection == "paper" && computerSelection == 'scissors') {
        computerScore++;
        updatePlayerScore();
        return 'Computer!';
    } else if (playerSelection == "scissors" && computerSelection == 'rock') {
        computerScore++;
        updatePlayerScore();
        return 'Computer!';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        updatePlayerScore();
        return 'You!';
    } else {
        return 'You tied! Try again.';
    }
}

updatePlayerScore();
updateDisplay();