//Declare constant variables ROCK = 0, PAPER = 1, SCISSORS = 2

//Declare function checkIfValid(playerChoice)
//if playerChoice === "rock" || "paper" || "scissors" return true
//else return false;

//Declare variable to keep track of how many games have been played.
let gameCounter = 0;


//Declare function toArray(x)
function toArray(x) {
    if (x == 0 || x == "rock") {
        return [0, "Rock"];
    }
    else if (x == 1 || x == "paper") {
        return [1, "Paper"];
    }
    else if (x == 2 || x == "scissors") {
        return [2, "Scissors"];
    }
}

//Declare function getComputerChoice()
function getComputerChoice() {
    //Declare local variable choice
    let choice;
    //generate random number (0, 1, or 2) and store in choice
    choice = Math.floor(Math.random() * 3);
    //Return choice
    return toArray(choice);
}


//Declare function getPlayerChoice()
function getPlayerChoice() {
    //Declare local variable choice
    let choice;
    //Prompt user for rock, paper, or scissors and store in choice
    choice = prompt("Rock, Paper, or Scissors?");
    //Convert choice to lowercase
    choice = choice.toLowerCase();
    return toArray(choice);

}


function playRound(computerChoice, playerChoice) {
    /*console.log(computerChoice);
    console.log(playerChoice);
    console.log(computerChoice[0]);
    console.log(playerChoice[0]);*/

    if (computerChoice[0] - playerChoice[0] == 1 || computerChoice[0] - playerChoice[0] ==  -2) {
        gameCounter++;
        return `You lose! ${computerChoice[1]} beats ${playerChoice[1]}`;
    }
    else if (playerChoice[0] - computerChoice[0] == 1 || playerChoice[0] - computerChoice[0] ==  -2) {
        gameCounter++;
        return `You win! ${playerChoice[1]} beats ${computerChoice[1]}`;
    }
    else if (computerChoice[0] == playerChoice[0]) {
        return "You tie! Replay the round.";
    }
}


function game() {
    
}

console.log(playRound(getComputerChoice(), getPlayerChoice()));
console.log(gameCounter);