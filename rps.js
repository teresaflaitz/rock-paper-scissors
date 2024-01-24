//Declare constant variables ROCK = 0, PAPER = 1, SCISSORS = 2

//Declare function getPlayerChoice()
//Declare local variable choice and choiceString
//Prompt user for RPS choice and store in variable choiceString
//Check if input is valid => function checkIfValid()
//if false => "invalid. new prompt"
//Match string to number => stringToNumber()
//Return choice

//Declare function checkIfValid(playerChoice)
//if playerChoice === "rock" || "paper" || "scissors" return true
//else return false;

//Declare fucntion stringToNumber(playerChoice)
//if "rock" retunr 0;
//if "paper" return 1;
//if "scissors" return 2;

//Declare function getComputerChoice()
function getComputerChoice() {
    //Declare local variable choice
    let choice;
    //generate random number (0, 1, or 2) and store in choice
    choice = Math.floor(Math.random() * 3);
    //Return choice
    return choice;
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());


//declare function playRound(computerSelection, playerSelection)
//
