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

    function playRound(humanChoice, computerChoice) {
        let choiceIndexDifference = choices.indexOf(humanChoice) - choices.indexOf(computerChoice);
        if (choiceIndexDifference == 1 || choiceIndexDifference == -2) {
            console.log("You win! " + humanChoice + " beats " + computerChoice);
            humanScore++;
        } else if (choiceIndexDifference == 0) {
            console.log("You tied! You both chose " + humanChoice);
            humanScore++;
            computerScore++;
        } else {
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log("Your score: " + humanScore);
        console.log("Computer score: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You beat the computer!");
    } else if (humanScore == computerScore) {
        console.log("You tied the computer!");
    } else {
        console.log("You lose to the computer!")
    }
}

playGame();