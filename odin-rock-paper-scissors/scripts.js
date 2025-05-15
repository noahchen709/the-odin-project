const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    // 3 is the number of choices
    let randNumToThree = Math.floor(Math.random() * 3);
    let choice = choices[randNumToThree];
    return choice;
}

function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = prompt("What is your choice? (rock, paper, scissors)").toLowerCase();
    }
    while (!choices.includes(humanChoice));

    return humanChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const result = document.querySelector("#result");
    const humanScoreDiv = document.querySelector("#humanScore");
    const computerScoreDiv = document.querySelector("#computerScore");
    const winner = document.querySelector("#winner");

    function playRound(humanChoice, computerChoice) {
        let choiceIndexDifference = choices.indexOf(humanChoice) - choices.indexOf(computerChoice);
        if (choiceIndexDifference == 1 || choiceIndexDifference == -2) {
            result.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        } else if (choiceIndexDifference == 0) {
            result.textContent = "You tied! You both chose " + humanChoice;
            humanScore++;
            computerScore++;
        } else {
            result.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        humanScoreDiv.textContent = "Your score: " + humanScore;
        computerScoreDiv.textContent = "Computer score: " + computerScore;

        if (humanScore >= 5 || computerScore >= 5) {
            if (humanScore > computerScore) {
                winner.style.color = "green";
                winner.textContent = "You beat the computer!";
            } else {
                winner.style.color = "red";
                winner.textContent = "You lose to the computer!";
            }
            rockButton.disabled = true;
            paperButton.disabled = true;
            scissorsButton.disabled = true;
        }
    }

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.addEventListener("click", () => {
        playRound(rockButton.value, getComputerChoice())
    });
    paperButton.addEventListener("click", () => {
        playRound(paperButton.value, getComputerChoice())
    });
    scissorsButton.addEventListener("click", () => {
        playRound(scissorsButton.value, getComputerChoice())
    });
}

playGame();