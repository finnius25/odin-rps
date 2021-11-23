
const computerPlay = () => {
    const rps = ["rock", "paper", "scissor"];
    return rps[Math.floor(Math.random() * rps.length)]
}


const playRound = (playerSelection, computerSelection) => {
    computerSelection = computerPlay();
    if (
    (computerScore <= 5 && playerScore <= 5) &&
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore ++;
        roundNum ++;
        
    }

    (playerSelection === "rock" && computerSelection === "paper") 
    (playerSelection === "paper" && computerSelection === "scissor")
    (playerSelection === "scissor" && computerSelection === "rock") 

    (playerSelection === "rock" && computerSelection === "rock") 
    (playerSelection === "paper" && computerSelection === "paper") 
    (playerSelection === "scissor" && computerSelection === "scissor") 
    
    } else {
        return ("Whoops! Something went wrong")
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissor = document.querySelector('#scissor');















// rock.addEventListener('click', () => {
//     alert(playRound('rock'));
// });
// paper.addEventListener('click', () => {
//     alert(playRound('paper'));
// });
// scissor.addEventListener('click', () => {
//     alert(playRound('scissor'));
// });






