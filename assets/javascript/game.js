//We need variables for wins, losses, user score, and arrays for computer score and crystal values?
var wins = 0;
    losses = 0;
    userScore = 0;

//*We need variables to count number of times each crystal is clicked.
var randomAmethystValue = 0;
    randomPotassiumValue = 0;
    randomSapphireValue = 0;
    randomRockValue = 0;
    randomComputerScore = 0;

//Array for computer score that starts at 19 and goes to 120.
var computerScoreList = [];
for (var i = 19; i<121; i++) {
    computerScoreList.push(i);
}
//Array for crystal values from 1-12. 
var crystalValues = []; 
for (var i = 1; i<13; i++) {
    crystalValues.push(i);
}

scoreReset();

$("#amethyst").click(function() {
    userScore = userScore + randomAmethystValue;
    //alert("Your Score: "+ userScore);
    displayResults();
    scoreCheck();
    });

$("#potassium").click(function() {
    userScore = userScore + randomPotassiumValue;
    //alert("Your Score: "+ userScore);
    displayResults();
    scoreCheck();
});

$("#sapphire").click(function() {
    userScore = userScore + randomSapphireValue;
    //alert("Your Score: "+ userScore);
    displayResults();
    scoreCheck();
});

$("#rock").click(function() {
    userScore = userScore + randomRockValue;
    //alert("Your Score: "+ userScore);
    displayResults();
    scoreCheck();
});

function scoreCheck() {
    //if userScore === computerScore, then update wins++
    if (userScore === randomComputerScore) {
        wins++;  
        scoreReset();
        displayWinsLosses();
        console.log("Wins: "+ wins);
    }
    //else update losses++.
    else if (userScore>randomComputerScore) {
        losses++;
        scoreReset();
        console.log("Losses: "+ losses);
        displayWinsLosses();
    }
}

function scoreReset() {
    userScore = 0;
    
    randomAmethystValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
    console.log(randomAmethystValue);

    randomPotassiumValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
    console.log(randomPotassiumValue);

    randomSapphireValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
    console.log(randomSapphireValue);

    randomRockValue = crystalValues [Math.floor(Math.random() * crystalValues.length)];
    console.log(randomRockValue);

    randomComputerScore = computerScoreList [Math.floor(Math.random() * computerScoreList.length)];
    console.log("Comp Score: " + randomComputerScore);

    displayResults();
}

function displayResults() {
    var gameScore = 
    "<h3>Computer's Score: " + randomComputerScore + "</h3>" +
    "<h3>Your Score: " + userScore + "</h3>";

    document.getElementById("gameScore").innerHTML = gameScore;
}

function displayWinsLosses() {
    var totalScore = 
    "<h3>Wins: " + wins + "</h3>" +
    "<h3>Losses: " + losses + "</h3>";

    document.getElementById("winsLosses").innerHTML = totalScore;
}

//These functions weren't working, but now they are. Part of troubleshooting.
/*function displayWins() {
    var totalWins = 
        "<h3>Wins: " + wins + "</h3>";
        document.getElementById("totalWins").innerHTML = totalWins;
}*/

/*function displayLosses() {
    $('#totalLosses').text("Losses: " + losses);
}*/
    

    


