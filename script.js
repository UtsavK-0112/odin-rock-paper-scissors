const roundText = document.querySelector(".round");
const buttons = document.querySelectorAll(".playerChoices>button");

const resultsParagraph = document.querySelector(".game-result");
const playerScoreParagraph = document.querySelector(".player-score");
const computerScoreParagraph = document.querySelector(".computer-score");

const playerChoiceParagraph = document.querySelector(".player-choice-text");
const computerChoiceParagraph = document.querySelector(".computer-choice-text");

const playerChoiceDiv = document.querySelector(".player-choice");
const computerChoiceDiv = document.querySelector(".computer-choice");

const playerChoiceImage = document.querySelector(".player-image");
const computerChoiceImage = document.querySelector(".computer-image");

let playerScore = 0;
let computerScore = 0;
let round = 0;

function getImageURLForObject(object) {
    let URL;

    object = object.toLowerCase();
    switch (object) {
        case "rock":
            URL = "rock.png";
            break;
        case "paper":
            URL = "paper.png";
            break;
        case "scissors":
            URL = "scissors.png";
            break;
    }

    return URL;
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

        playerChoiceImage.src = getImageURLForObject(playerChoice);
        playerChoiceParagraph.textContent = playerChoice;

        computerChoiceImage.src = "thinking.png";
        computerChoiceParagraph.textContent = "choosing...";

        setTimeout(() => {
            computerChoiceParagraph.textContent = computerChoice;
            computerChoiceImage.src = getImageURLForObject(computerChoice);

            const result = playRound(playerChoice, computerChoice);

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

            round++;
            roundText.textContent = round + 1;
        }, 2000);
    });
});
