//! Buttons
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorBtn = document.querySelector("#scissorBtn");

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

//! Buttons
rockBtn.addEventListener("click", function () {
  game();
});

paperBtn.addEventListener("click", function () {
  game();
});

scissorBtn.addEventListener("click", function () {
  game();
});

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
  displayPlayerSelection.innerHTML = `Player played ${playerSelection}`;
  displayComputerSelection.innerHTML = `computer played ${computerSelection}`;

  if (computerSelection == "paper") {
    displayRound.innerHTML = `${computerPointPvR}`;
    return computerPointPvR;
  } else if (computerSelection == "scissor") {
    displayRound.innerHTML = `${playerPointRvS}`;
    return playerPointRvS;
  } else {
    displayRound.innerHTML = `${draw}`;
    return draw;
  }
}

function playPaper() {
  const computerSelection = computerChoice();
  playerSelection = "paper";
  displayPlayerSelection.innerHTML = `Player played ${playerSelection}`;
  displayComputerSelection.innerHTML = `computer played ${computerSelection}`;

  if (computerSelection == "rock") {
    displayRound.innerHTML = `${playerPointPvS}`;
    return playerPointPvS;
  } else if (computerSelection == "scissor") {
    displayRound.innerHTML = `${computerPointSvP}`;
    return computerPointRvS;
  } else {
    displayRound.innerHTML = `${draw}`;
    return draw;
  }
}

function playScissor() {
  const computerSelection = computerChoice();
  playerSelection = "scissor";
  displayPlayerSelection.innerHTML = `Player played ${playerSelection}`;
  displayComputerSelection.innerHTML = `computer played ${computerSelection}`;

  if (computerSelection == "paper") {
    displayRound.innerHTML = `${playerPointSvP}`;
    return playerPointSvP;
  } else if (computerSelection == "rock") {
    displayRound.innerHTML = `${computerPointRvS}`;
    return computerPointRvS;
  } else {
    displayRound.innerHTML = `${draw}`;
    return draw;
  }
}

function game() {
  const rock = playRock();
  const paper = playPaper();
  const scissor = playScissor();

  if (rock === playerPointRvS) {
    playerScore++;
  } else if (rock === computerPointPvR) {
    computerScore++;
  } else if (paper === playerPointPvS) {
    playerScore++;
  } else if (paper === computerPointSvP) {
    computerScore++;
  } else if (scissor === playerPointSvP) {
    playerScore++;
  } else if (scissor === computerPointRvS) {
    computerScore++;
  } else {
  }

  displayPlayerScore.innerHTML = `Player score: ${playerScore}`;
  displayComputerScore.innerHTML = `Computer Score: ${computerScore}`;

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