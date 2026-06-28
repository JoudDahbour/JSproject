function computerPlay(){
    const moves = ["rock", "paper", "scissors"];
    const position = Math.floor(Math.random() * moves.length);
    return moves[position];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! You both chose " + playerSelection;
    } 
    if (playerSelection === "rock" && computerSelection === "scissors") {
            return "You Win! Rock beats Scissors";
    }
    if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock";
    }
    if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
    }
    
    if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
    }
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
    }
    if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
    }
}

