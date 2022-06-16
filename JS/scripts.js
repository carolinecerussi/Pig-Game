
// ÷FullRollValue.prototype.total = function() {
  // let currentRoll = Math.floor(Math.random() * 6 +1 )
  // if (currentRoll ===1) {
    // return "back to 0 and end of turn! :(";
  //} else {
 //   return total;
//  }
//};


//business logic for player//

function Player (name,score,turn) {
  this.name = name;
  this.score = score;
  this.turn = turn;
}

//---test: calls name,score,and turn for each player when used. 
// if function Player(caroline,12,3);
//expected output : name =caroline;
                    //score =12;
                    // turn= 3;

Player.prototype.addScore = function(totalTurnScore) {
  this.score += totalTurnScore; //test return :true. in console.log("True)//
};
// -- test: this will output a new value for this.score, called through referencing the function Player element (prototype) and adding .addScore to specify whats happening to the prototype. and logging to specific Player's info //
// function test : Player(caroline,12,3);
//Player.caroline.addScore = 4;
// this.score = 16;
//  expected output =  //current score value for this.score within the Player function (under called prototype) // is returned in the specific prototype's score value//



//---------------// business logic for dice//

function Dice (sides) {
  this.sides = sides; //just one element within dice//
} 
// storing sides of dice rolled under dice 
//test function Dice(6) 
//expected output would assign this.sides to 6 since its a dice)
//Dice(); => shows 6;

function exitTurn(player1, player2, turnNum, totalTurnScore) {
  if (turnNum % 2 === 1) {
  player1.addScore(totalTurnScore);
  player1.turn = true; //saying if turnNum divided number of players (in this case 2) is 1 
  $("#player-name").text(player2.name); //bringing id in html to text for player2.name;
    } 
  else { //if turn turnNum !=2 //
  player2.addScore(totalTurnScore);
  player2.turn = true;
  player1.turn = false,
  $("#player-name").text(player1.name);
  }
  $("#player-1-points").text(player1.score);
  $("#player-2-points").text(player2.score);
} 
// this function says if turnNum value divided by total players (2) and equals 1, it is player 1's turn and show via text player 1 name.
//if else, so turnNum value %2 is not === 1 , it is player 2's turn. and will then show player1's name.


Dice.prototype.roll = function() {
  let roll = Math.floor(Math.random() * this.sides) +1;
  return roll;
};

//calling upon the Dice object that will reference the sides in order to '.roll' said sides.
//roll will take a random side and multiply by  (this.sides) value, and add a 1 since math random doesnt come back as a hole number.  

//test = if Dice.roll();
//expected output : any random number between 1-6

Dice.prototype.addPoints = function(totalTurnScore,valueOfRoll) {
  totalTurnScore = totalTurnScore + valueOfRoll;
  return totalTurnScore;
};
//test= if Dice.addPoints = (12,3);
//expected output : (15)

//-------UI logic---------//

$(document).ready(function() {
//saying all will happen when the document is loaded//
//the new functions are equal to the function of backlogic function (for example player) with NEW referenced values that will insert div class reference as the name, score as 0, and turn value is true, saying it is player 1's turn.  and player 1 turns shows up and score starts at 0//
let player1 = new Player("Player-1",0,true);
let player2 = new Player("Player-2",0,false);
let dice1 = new Dice(6); //let dice1 equals Dice function covering 6 sides;
let turnNum = new 1;
let totalTurnScore = 0;

$("#players-name").text(player1.name); //shows div class id 'players name' <player 1> to text on page
$("#roll").click(function() {
  let valueOfRoll = dice1.roll(); // going to reference dice 1 (which will have 6 sides) and using .roll method 
  $("#valueOfRoll").text(valueOfRoll); // shows div class id 'valueOfRoll' to text on page reveferencing the valueOfRoll function.
  totalTurnScore = dice1.addPoints(totalTurnScore,valueOfRoll); // when the dice1 is rolled, and the value is created, shows value as text, and then 
  if (valueOfRoll===1) {
    totalTurnScore = 0;
    exitTurn(player1,player2,turnNum,totalTurnScore);//if you roll a 1, the score resets to 0 for the turn, and exit Turn is applied to 
    turnNum ++;
  } $("#roll-total").text(totalTurnScore); //else - if dice roll is higher than 1, relay the score//
});

$("#hold").click(function() {
  exitTurn(player1,player2,turnNum.totalTurnScore);
  totalTurnScore + 0;
  turnNum ++;
});

});