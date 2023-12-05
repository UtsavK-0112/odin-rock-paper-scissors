const buttons = document.querySelectorAll(".playerChoices>button");
const playerChoiceParagraph = document.querySelector(".player-choice");
const computerChoiceParagraph = document.querySelector(".computer-choice");
const resultsParagraph = document.querySelector(".game-result");
const playerScoreParagraph = document.querySelector(".player-score");
const computerScoreParagraph = document.querySelector(".computer-score");
const roundText = document.querySelector(".round");

let playerScore = 0;
let computerScore = 0;
let round = 0;

function getImageForObject(object) {
    let image = document.createElement("img");

    object = object.ToLowerCase();
    switch (object) {
        case "rock":
            break;
        case "paper":
            break;
        case "scissors":
            break;
    }
}

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

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        playerChoiceParagraph.textContent = "";
        computerChoiceParagraph.textContent = "";
        resultsParagraph.textContent = "";

        const playerChoice = event.target.id;
        const computerChoice = getComputerChoice();

        playerChoiceParagraph.textContent = playerChoice;
        computerChoiceParagraph.textContent = "choosing...";

        setTimeout(() => {
            computerChoiceParagraph.textContent = computerChoice;
            const result = playRound(playerChoice, computerChoice);

            round++;
            switch (result) {
                case "win":
                    playerScore++;
                    message = "You won! :) ";

                    break;
                case "loss":
                    computerScore++;
                    message = "You lost :(";

                    break;
                case "draw":
                    round--;
                    message = "It was a draw. Let's do that again!";
                    break;
            }

            resultsParagraph.textContent = message;
            playerScoreParagraph.textContent = playerScore;
            computerScoreParagraph.textContent = computerScore;
            roundText.textContent = round + 1;
        }, 3000);
    });
});
