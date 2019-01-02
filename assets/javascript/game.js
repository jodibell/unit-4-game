//We need variables for wins, losses, user score, and arrays for computer score and crystal values?
var wins = 0;
    losses = 0;
    userScore = 0;

//We need variables to count number of times each crystal is clicked.
var amethystCounter = 0;
    potassiumCounter = 0;
    sapphireCounter = 0;
    rockCounter = 0;

//Need a crystalArray.
var crystalArray = ["Amethyst", "Potassium", "Blue Sapphire", "Rock Crystal"];

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

//Variables for each random crystal value.
var randomAmethystValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
console.log(randomAmethystValue);

var randomPotassiumValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
console.log(randomPotassiumValue);

var randomSapphireValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
console.log(randomSapphireValue);

var randomRockValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
console.log(randomRockValue);

//Then, when a crystal is clicked, we need a click event that adds randomCrystalValue to the userScore.
$("#amethyst").click(function() {
    amethystCounter++;
    alert(amethystCounter * randomAmethystValue);
});

$("#potassium").click(function() {
    potassiumCounter++;
    alert(potassiumCounter * randomPotassiumValue);
});

$("#sapphire").click(function() {
    sapphireCounter++;
    alert(sapphireCounter * randomSapphireValue);
});

$("#rock").click(function() {
    rockCounter++;
    alert(rockCounter * randomRockValue);
});

//Update userScore (add all crystal totals, which means create 4 more variables, or have a long multiplication string).

//Conditional-if userScore < computerScore, do not reset/keep adding to userScore upon click events.
//else if userScore === computerScore, then update wins++
//else update losses++.
