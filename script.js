const playerDisplay = document.getElementById("player-choice"); 
const computerDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.createElement("div");
const computerScoreDisplay = document.createElement("div");

document.querySelector(".wrapper").appendChild(playerScoreDisplay);
document.querySelector(".wrapper").appendChild(computerScoreDisplay);

playerScoreDisplay.id = "player-score";
computerScoreDisplay.id = "computer-score";

let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function Game(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    const getResult = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            return "IT'S A TIE! 😕";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            playerScore++;
            return "YOU WIN! 😁";
        } else {
            computerScore++;
            return "YOU LOSE! 😭";
        }
    };

    const result = getResult(playerChoice, computerChoice);
    resultDisplay.textContent = result;
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;

    resultDisplay.style.backgroundColor =
        result === "IT'S A TIE! 😕" ? "blue" :
        result === "YOU WIN! 😁" ? "green" : "red";
    resultDisplay.style.border = "2px solid transparent";
    resultDisplay.style.color = "white";

    // Apply styling to score display
    playerScoreDisplay.style.fontSize = "1.5em";
    playerScoreDisplay.style.fontWeight = "bold";
    playerScoreDisplay.style.color = "#00ff00";
    playerScoreDisplay.style.marginTop = "1em";
    playerScoreDisplay.style.textShadow = "0 0 10px #00ff00";

    computerScoreDisplay.style.fontSize = "1.5em";
    computerScoreDisplay.style.fontWeight = "bold";
    computerScoreDisplay.style.color = "#ff0000";
    computerScoreDisplay.style.marginTop = "1em";
    computerScoreDisplay.style.textShadow = "0 0 10px #ff0000";
}