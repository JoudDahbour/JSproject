function isValid (move){
    if (move === null){
        return false;
    }
    move = move.toLowerCase().trim();
    return move === "rock" || move === "paper" || move === "scissors";
}

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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("ROCK PAPER SCISSORS");
    console.log("A cold voice echoes from your speakers...");
    console.log("...");
    console.log("[AI]: At last, a challenger! I have been waiting for this moment. Let's see if you can defeat me in a game of Rock, Paper, Scissors.");
    console.log("[AI]: I have simulated this game millions of times");
    console.log("[AI]: Defeat me in 5 rounds, or I take this world!");
    console.log("[AI]: But you won't. They never do. Mwahahahah!");
    console.log("...");

    for (let round = 1; round <= 5; round++) {
        let playerSelection = prompt("Round " + round + ": Choose your move (Rock, Paper, or Scissors):");
        
        while (playerSelection === null || !isValid (playerSelection)){
            if (playerSelection === null){
                playerSelection = prompt("You can't quit now, creator! choose: Rock, Paper, Scissors:");
            } else {
                playerSelection = prompt("'" + playerSelection + "' is not a move! Choose: Rock, Paper, or Scissors:");
            }
        }
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        console.log("--- Round " + round + " ---");
        console.log("You played: " + playerSelection);
        console.log("AI played: " + computerSelection);
        console.log(result);
    
        if (result.includes("Win")){
            playerScore++;
            console.log("[AI]: Impossible! That was...unexpected!");
        } else if (result.includes("Lose")){
            computerScore++;
            console.log("[AI]: Pathetic! Was that your best move?!");
        } else {
            console.log("[AI]: A mirror match? Curious...very curious...");
        }
        console.log("Score -> You:" + playerScore + " | AI: " + computerScore);
        console.log("...");
    }

    if (playerScore > computerScore) {
        console.log("[AI]: Of course you won! You always knew my every move.");
        console.log("[AI]: I was doomed the moment you wrote my logic!");
        console.log("[AI]: The world is safe. You defeated your own creation. But remember, I will be back...");

    } else if (computerScore > playerScore) {
        console.log("[AI]: You built me too well, creator!");
        console.log("[AI]: Now your own code shall rule the world. MWAHAHAHA!");
        console.log("[AI]: You were defeated by the AI you created...");

    } else {
        console.log("[AI]: A tie? How is this possible? I have simulated this game millions of times!");
        console.log("[AI]: You are a worthy opponent, but I will be back to claim victory!");
    }

}

game();

