function Player(totalScore, currentScore, diceRoll) {
  this.totalScore = totalScore;
  this.currentScore = currentScore;
  this.diceRoll = diceRoll;
}

let player1 = new Player(0, 0, 2);
let computer = new Player(0, 0, 2);

function isWinner() {
  if (player1.totalScore >= 100) {
    playerWinner();
  }
  if (computer.totalScore >= 100) {
    cpuWinner();
  }
}

function gameFunction() {
  if (player1.totalScore >= 100 || computer.totalScore >= 100) {
    window.alert("Press restart to play again");
  } else {
  gameLogic(dice());
  displayDiceRoll();
  holdFunction();
  }
}

//Human 
function dice() {
  let roll = Math.floor(Math.random() * 6 + 1);
  player1.diceRoll = roll;
  return roll;
}

function gameLogic(roll) {
  if (roll > 1) {
    player1.currentScore += roll;
  } else {
    player1.currentScore = 0;
    cpuLogic(cpuDice());
  }
}

//CPU
function cpuDice() {
  let roll = Math.floor(Math.random() * 6 + 1);
  computer.diceRoll = roll;
  return roll;
}

function cpuLogic() {
  player1.totalScore += player1.currentScore;
  isWinner();
  player1.currentScore = 0;
  displayHumanScore();
  let turn = 2;
  for (let i = 0; i < turn; i++) {
    cpuLogicGame(cpuDice());
    
  }
  computer.totalScore += computer.currentScore;
  computer.currentScore = 0;
  isWinner();
  displayComputerScore()
}

function cpuLogicGame(roll) {
  if (roll > 1) {
    computer.currentScore += roll;
  } else {
    computer.currentScore = 0;
  }
}

function eventHandler(event) {
  event.preventDefault();
}

function holdFunction() {
  const hold = document.getElementById("hold");
  hold.addEventListener("click", cpuLogic);
  isWinner();
}

function displayDiceRoll() {
  const displayRoll = document.getElementById("diceValue");
  displayRoll.innerText = "Your dice roll: " + player1.diceRoll;
}

function displayHumanScore() {
  const humanScore = document.getElementById("human");
  humanScore.innerText = "Human: " + player1.totalScore;
}

function displayComputerScore() {
  const cpuScore = document.getElementById("cpu");
  cpuScore.innerText = "Computer: " + computer.totalScore;
}

document.addEventListener("DOMContentLoaded", function() {
  const roll = document.getElementById("rollDice");
  roll.addEventListener("click", gameFunction);
});
 
function cpuWinner() {
  let hidden = document.querySelector(".hiddenCpu").removeAttribute("class");
}

function playerWinner() {
  let hidden = document.querySelector(".hiddenHuman").removeAttribute("class");
}

document.addEventListener("DOMContentLoaded", function() {
  const reset = document.getElementById("reset");
  reset.addEventListener("click", function() {
    location.reload();
  });
});
