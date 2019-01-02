//We need variables for wins, losses, user score, and arrays for computer score and crystal values?
var wins = 0;
    losses = 0;
    userScore = 0;

//Array for computer score that starts at 19 and goes to 120.
var computerScoreList = [];
for (var i = 19; i<121; i++) {
    computerScoreList.push(i);
}

//Then we need to create a variable for random computer score.
var randomComputerScore = computerScoreList [Math.floor(Math.random() * computerScoreList.length)];
console.log(randomComputerScore);

//Array for crystal values from 1-12. 
var crystalValues = []; 
for (var i = 1; i<13; i++) {
    crystalValues.push(i);
}

//Variable for random computer score.
var randomCrystalValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
console.log(randomCrystalValue);

//We also need to create a for loop to run through the crystal value array and assign a random crystal value to each crystal.
