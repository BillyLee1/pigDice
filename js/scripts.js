// Define a Player class
function Player(totalScore, currentScore, diceRoll) {
  this.totalScore = totalScore;
  this.currentScore = currentScore;
  this.diceRoll = diceRoll;
}

function dice() {
  let roll = Math.floor(Math.random() * 6 + 1);
  player1.diceRoll = roll;
  console.log(player1.diceRoll);
  return roll;

}

function gameFunction(dice) {

}

function eventHandler(event) {
  event.preventDefault();

}

document.addEventListener("DOMContentLoaded", function() {
  const roll = document.getElementById("rollDice");
  const displayRoll = document.getElementById("diceValue");
  roll.addEventListener("click", dice);
  
});

// Add current score to total 
function addScore() {
  this.totalScore += this.currentScore;
  this.currentScore = 0;
  console.log(Player.currentScore);
}

let player1 = new Player(0, 0, 0);
let computer = new Player(0, 0, 0);
