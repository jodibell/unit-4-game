//We need variables for wins, losses, user score, and arrays for computer score and crystal values?
var wins = 0;
    losses = 0;
    userScore = 0;

//*We need variables to count number of times each crystal is clicked.
var amethystCounter = 0;
    potassiumCounter = 0;
    sapphireCounter = 0;
    rockCounter = 0;
    randomAmethystValue = 0;
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
    amethystCounter++;
    userScore = userScore + randomAmethystValue;
    alert("Your Score: "+ userScore);
    scoreCheck();
    });

$("#potassium").click(function() {
    potassiumCounter++;
    userScore = userScore + randomPotassiumValue;
    alert("Your Score: "+ userScore);
    scoreCheck();
});

$("#sapphire").click(function() {
    sapphireCounter++;
    userScore = userScore + randomSapphireValue;
    alert("Your Score: "+ userScore);
    scoreCheck();
});

$("#rock").click(function() {
    rockCounter++;
    userScore = userScore + randomRockValue;
    alert("Your Score: "+ userScore);
    scoreCheck();
});

function scoreCheck() {
    //if userScore === computerScore, then update wins++
    if (userScore === randomComputerScore) {
        wins++;
        scoreReset();
        console.log("Wins: "+ wins);
    }
    //else update losses++.
    else if (userScore>randomComputerScore) {
        losses++;
        scoreReset();
        console.log("Losses: "+ losses);
    }
}

function scoreReset() {
    amethystCounter = 0;
    potassiumCounter = 0;
    sapphireCounter = 0;
    rockCounter = 0;
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
    console.log("Comp Score: ", randomComputerScore);
}

