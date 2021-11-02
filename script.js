let playerPlay = () => {
    return prompt("Rock Paper Scissor GO!").toLowerCase();
}

let computerPlay = () => {
    const rps = ["rock", "paper", "scissor"];
    return rps[Math.floor(Math.random() * rps.length)]
}

let computerSelection = computerPlay();
let playerSelection = playerPlay();

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

let myGame = () => {
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        let playerSelection = playerPlay();
        return console.log(playRound(playerSelection, computerSelection));
    };
}


myGame();



