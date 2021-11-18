
const computerPlay = () => {
    const rps = ["rock", "paper", "scissor"];
    return rps[Math.floor(Math.random() * rps.length)]
}

const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        return playerSelection = button.id;
    });
});

console.log(playerSelection);
