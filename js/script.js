const playerPointPvS = "Player wins this round. Paper beats rock.";
const playerPointSvP = "Player wins this round. Scissor beats paper.";
const playerPointRvS = "Player wins this round. Rock beats scissor";
const computerPointRvS = "Computer wins this round. Rock beats scissor";
const computerPointPvR = "Computer wins this round. Paper beats Rock.";
const computerPointSvP = "Computer wins this round. Scissor beats paper.";
const draw = "Draw. Nobody wins this round";

function playRound() {
  let playerSelection = prompt("r/p/s?", "rock").toLowerCase();
  let gameArray = ["rock", "scissor", "paper"];
  let computerSelection = gameArray[Math.floor(Math.random() * gameArray.length)];

  console.log(`Computer selected ${computerSelection}`);
  console.log(`Player selected ${playerSelection}`);

  if (computerSelection === "rock" && playerSelection === "paper") {
    return playerPointPvS;
  } else if (computerSelection === "rock" && playerSelection === "scissor") {
    return computerPointRvS;
  } else if (computerSelection === "paper" && playerSelection === "scissor") {
    return playerPointSvP;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    return computerPointPvR;
  } else if (computerSelection === "scissor" && playerSelection === "rock") {
    return playerPointRvS;
  } else if (computerSelection === "scissor" && playerSelection === "paper") {
    return computerPointSvP;
  } else if (
    (computerSelection === "rock" && playerSelection === "rock") ||
    (computerSelection === "paper" && playerSelection === "paper") ||
    (computerSelection === "scissor" && playerSelection === "scissor")
  ) {
    return draw;
  }
}

function game() {
  let computerScore = 0;
  let playerScore = 0;

  for (i = 0; i < 5; i++) {
    let result = playRound();
    // I variable result equals the return value of playRound()
    if (result === playerPointPvS) {
      playerScore++;
      console.log(`${playerPointPvS}`);
    } else if (result === playerPointRvS) {
      playerScore++;
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
      console.log(`${playerPointRvS}`);
    } else if (result === playerPointSvP) {
      playerScore++;
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
      console.log(`${playerPointSvP}`);
    } else if (result === computerPointRvS) {
      computerScore++;
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
      console.log(`${computerPointRvS}`);
    } else if (result === computerPointPvR) {
      computerScore++;
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
      console.log(`${computerPointPvR}`);
    } else if (result === computerPointSvP) {
      computerScore++;
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
      console.log(`${computerPointSvP}`);
    } else {
      console.log(`${draw}`);
      console.log(`Computer score: ${computerScore}`);
      console.log(`Player score: ${playerScore}`);
    }
  }
  
  //! change so that the first to reach 5 points wins
  if (computerScore === playerScore) {
    console.log("It's a tie.");
  } else if (computerScore < playerScore) {
    console.log(`${computerScore} - ${playerScore}: Player wins the game!`);
  } else if (computerScore > playerScore) {
    console.log(`${computerScore} - ${playerScore}: Computer wins the game!`);
  }
}

game();

//! Notes for browser implementation
// Buttons have hover effets
// Buttons show computer choice
// Color coded win/lose
// Popup prompt to reset game
// Bonus: delayed display of computer choice