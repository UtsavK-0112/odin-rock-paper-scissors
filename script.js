function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random_index = Math.floor(Math.random() * 3);
    return choices[random_index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a draw";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats rock";
        }

        if (computerSelection === "scissors") {
            return "You win! Rock beats scissors";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats paper";
        }

        if (computerSelection === "rock") {
            return "You win! Paper beats rock";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats scissors";
        }

        if (computerSelection === "paper") {
            return "You win! Scissors beats paper";
        }
    }
}
