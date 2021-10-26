const option = ["rock", "paper", "scissor"];

let computerPlay = (option) => {
    let i = Math.floor(Math.random() * option.length)
    return option[i];
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("You win! Rock beats Scissor");
    } else {
        console.log("It's a tie! Play again");
    }
}


const computerSelection = computerPlay();
const playerSelection = "rock";






