const rps = ["rock", "paper", "scissor"];

let playerPlay = () => {
    return prompt("Rock Paper Scissor GO!").toLowerCase();
}

let computerPlay = (options) => {
    let i = Math.floor(Math.random() * options.length)
    return options[i];
}

let playRound = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats Rock");
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return ("You win! Rock beats Scissor");
    } else if (playerSelection === "rock" && computerSelection === "rock") {
        return ("It's a tie! Play again");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissor"){
        return ("You lose! Scissor beats Paper");
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return ("It's a tie! Play again");
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return ("You lose! Rock beats Scissors");
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return ("You win! Scissors beats Paper"); 
    } else if (playerSelection === "scissor" && computerSelection === "scissor") {
        return ("It's a tie! Play again")
    } else {
        return ("Whoops! Something went wrong")
    }
}


const computerSelection = computerPlay(rps);
const playerSelection = playerPlay();

console.log(playRound(playerSelection, computerSelection));










