//Declare function checkIfValid(playerSelection)
//if playerSelection === "rock" || "paper" || "scissors" return true
//else return false;


/*const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();*/

//Declare variable to keep track of how many games have been played.
let gameCounter = 0;
//Declare variable to keep track of player score.
let playerScore = 0;


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


/*
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
*/


function playRound(computerSelection, playerSelection) {

    if (computerSelection[0] - playerSelection[0] == 1 || computerSelection[0] - playerSelection[0] ==  -2) {
        gameCounter++;
        return `You lose! ${computerSelection[1]} beats ${playerSelection[1]}`;
    }
    else if (playerSelection[0] - computerSelection[0] == 1 || playerSelection[0] - computerSelection[0] ==  -2) {
        gameCounter++;
        playerScore++;
        return `You win! ${playerSelection[1]} beats ${computerSelection[1]}`;
    }
    else if (computerSelection[0] == playerSelection[0]) {
        return "You tie! Replay the round.";
    }
}

/*
function game() {
    while(gameCounter < 5) {
        console.log(playRound(getComputerChoice(), getPlayerChoice()));
        //console.log(gameCounter);
        //console.log(playerScore);
    }
    if (playerScore > 2) {
        return "Congrats! You are the winner.";
    }
    else {
        return "You lost!";
    }
}

console.log(game());*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {

    button.addEventListener('click', () => {
        console.log(playRound(getComputerChoice(), toArray(button.id)));
    });
});