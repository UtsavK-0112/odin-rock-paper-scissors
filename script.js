function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random_index = Math.floor(Math.random() * 3);
    return choices[random_index];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "draw";
    }

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "loss";
        }

        if (computerSelection === "scissors") {
            return "win";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "loss";
        }

        if (computerSelection === "rock") {
            return "win";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "loss";
        }

        if (computerSelection === "paper") {
            return "win";
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1} / 5`);
        while (true) {
            playerSelection = prompt("What's your move (rock/paper/scissors)");

            if (
                playerSelection.toLowerCase() === "rock" ||
                playerSelection.toLowerCase() === "paper" ||
                playerSelection.toLowerCase() === "scissors"
            ) {
                break;
            } else {
                console.log("Please type a valid input!");
                continue;
            }
        }

        computerSelection = getComputerChoice();
        result = playRound(playerSelection, computerSelection);

        message = `You chose ${playerSelection}, and the computer chose... ${computerSelection}! `;

        switch (result) {
            case "draw":
                message += "It was a draw. Let's do that again!";
                i--;
                break;
            case "loss":
                message += "You lost :(";
                computerScore++;
                break;
            case "win":
                message += "You won! :) ";
                playerScore++;
                break;
        }

        console.log(message);
        console.log(
            `Your score: ${playerScore}    :    Computer's score: ${computerScore}`
        );
    }
}

game();
