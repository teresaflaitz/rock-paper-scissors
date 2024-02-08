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


const buttons = document.querySelectorAll('button');
const round = document.querySelector('#round');
const score = document.querySelector('#score');
const results = document.querySelector('#results');
const final = document.querySelector('#final');


buttons.forEach((button) => {

    button.addEventListener('click', () => {
        //Display results
        results.textContent = (playRound(getComputerChoice(), toArray(button.id)));
        round.textContent =  `Round: ${gameCounter}`;
        score.textContent = `Score: ${playerScore}`;
        final.textContent = "";

        if (gameCounter === 5 && playerScore > 2) {
            final.textContent = "Congrats! You are the winner.";
            //Reset game
            gameCounter = 0;
            playerScore = 0;
        }
        else if (gameCounter === 5) {
            final.textContent = "You lost!";
            //Reset game
            gameCounter = 0;
            playerScore = 0;
        };
    });
});
