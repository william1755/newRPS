
function getComputerChoice() {
    let rps = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * rps.length);
    let randomString = rps[randomIndex]
    console.log(randomString);
    return(randomString);
}
computerChoice = getComputerChoice();

let rockPlayerBtn = document.getElementById('rockBtn');
let paperPlayerBtn = document.getElementById('paperBtn');
let scissorsPlayerBtn = document.getElementById('scissorsBtn');

let playerChoiceValue = 'undefined';

function updatePlayerChoice(value) {
    playerChoiceValue = value;
    console.log('Player choice updated:', playerChoiceValue);
    return playerChoiceValue;
}

rockPlayerBtn.addEventListener('click', () => {
     updatePlayerChoice("rock");
});

paperPlayerBtn.addEventListener('click', () => {
    updatePlayerChoice("paper");
});

scissorsPlayerBtn.addEventListener('click', () => {
    updatePlayerChoice("scissors");
    
});

function updateDisplay() {
    let playerChoice = document.getElementById('playerChoice');
    playerChoice.innerText = `You Chose: ${playerChoiceValue}`;
}

let lockInBtn = document.getElementById('lockIn');
//lock in player's choice
lockInBtn.addEventListener('click', () => {
    updateDisplay();
    console.log(`You locked in ${playerChoiceValue}`);
    //disable buttons to select choice
    rockPlayerBtn.disabled = true;
    paperPlayerBtn.disabled = true;
    scissorsPlayerBtn.disabled = true;
    let compChoice = document.getElementById('computerChoice');
    compChoice.innerText = `And the Computer Chose: ${computerChoice}`;
    console.log(playGame(playerChoiceValue, computerChoice));
    let winnerDisplay = document.getElementById('winner');
    let winner = playGame(playerChoiceValue, computerChoice );
    winnerDisplay.innerText = `The winner is: ${winner}`;
    
})



function playGame(playerSelection, computerSelection) {
     if (playerSelection == "rock" && computerSelection == 'paper') {
         return('Computer!')
         console.log("Computer!")
     } else if (playerSelection == "rock" && computerSelection == 'scissors') {
         return("You!")
         console.log("You!")
     } else if (playerSelection == "paper" && computerSelection == 'rock') {
         return("You!")
         console.log("You!")
     } else if (playerSelection == "paper" && computerSelection == 'scissors') {
         return("Computer!") 
         console.log("Computer!")
     } else if (playerSelection == "scissors" && computerSelection == 'rock') {
         return("Computer!")
         console.log("Computer!")
     } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
         return("You!")
         console.log("You!")
     } else {
         return("You tied! Try again.")
     }
}