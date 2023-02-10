//! Buttons
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");
rockBtn.addEventListener("click", playRock);
paperBtn.addEventListener("click", playPaper);
scissorBtn.addEventListener("click", playScissor);

//! Game Stats
const displayPlayerSelection = document.querySelector("#playerSelection");
const displayComputerSelection = document.querySelector("#computerSelection");
const displayRound = document.querySelector("#roundResult");
const displayPlayerScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#computerScore");
const declareWinner = document.querySelector("#declareWinner");

//! Round statements
const playerPointPvS = "Player wins this round. Paper beats rock.";
const playerPointSvP = "Player wins this round. Scissor beats paper.";
const playerPointRvS = "Player wins this round. Rock beats scissor";
const computerPointRvS = "Computer wins this round. Rock beats scissor";
const computerPointPvR = "Computer wins this round. Paper beats Rock.";
const computerPointSvP = "Computer wins this round. Scissor beats paper.";
const draw = "Draw. Nobody wins this round";

let computerScore = 0;
let playerScore = 0;
let playerSelection;
const gameArray = ["rock", "scissor", "paper"];

//! Functions
function computerChoice() {
  const computerSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  return computerSelection;
}

function playRock() {
  const computerSelection = computerChoice();
  playerSelection = "rock";
  
  if (computerSelection == "paper") {
    displayRound.innerHTML = `${computerPointPvR}`;
    computerScore++;
  } else if (computerSelection == "scissor") {
    displayRound.innerHTML = `${playerPointRvS}`;
    playerScore++;
  } else {
    displayRound.innerHTML = `${draw}`;
  }
  
  displayPlayerSelection.innerHTML = `Player played ${playerSelection}`;
  displayComputerSelection.innerHTML = `computer played ${computerSelection}`;
  displayPlayerScore.innerHTML = `Player score: ${playerScore}`;
  displayComputerScore.innerHTML = `Computer Score: ${computerScore}`;
  game() 
}

function playPaper() {
  const computerSelection = computerChoice();
  playerSelection = "paper";
  
  if (computerSelection == "rock") {
    displayRound.innerHTML = `${playerPointPvS}`;
    playerScore++;
  } else if (computerSelection == "scissor") {
    displayRound.innerHTML = `${computerPointSvP}`;
    computerScore++;
  } else {
    displayRound.innerHTML = `${draw}`;
  }

  displayPlayerSelection.innerHTML = `Player played ${playerSelection}`;
  displayComputerSelection.innerHTML = `computer played ${computerSelection}`;
  displayPlayerScore.innerHTML = `Player score: ${playerScore}`;
  displayComputerScore.innerHTML = `Computer Score: ${computerScore}`;
  game() 
}

function playScissor() {
  const computerSelection = computerChoice();
  playerSelection = "scissor";
  
  if (computerSelection == "paper") {
    displayRound.innerHTML = `${playerPointSvP}`;
    playerScore++;
  } else if (computerSelection == "rock") {
    displayRound.innerHTML = `${computerPointRvS}`;
    computerScore++;
  } else {
    displayRound.innerHTML = `${draw}`;
  }
  
  displayPlayerSelection.innerHTML = `Player played ${playerSelection}`;
  displayComputerSelection.innerHTML = `computer played ${computerSelection}`;
  displayPlayerScore.innerHTML = `Player score: ${playerScore}`;
  displayComputerScore.innerHTML = `Computer Score: ${computerScore}`;
  game() 
}

function game() {
  if (playerScore === 5 || computerScore === 5) {
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
  }

  if (playerScore === 5) {
    declareWinner.innerHTML = `Player wins ${playerScore} - ${computerScore}`;
  } else if (computerScore === 5) {
    declareWinner.innerHTML = `computer wins ${playerScore} - ${computerScore}`;
  }
}
