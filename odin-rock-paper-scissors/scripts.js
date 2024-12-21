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

function playRound(humanChoice, computerChoice) {
    let choiceIndexDifference = choices.indexOf(humanChoice) - choices.indexOf(computerChoice);
    console.log(humanChoice);
    console.log(computerChoice);
    if (choiceIndexDifference == 1 || choiceIndexDifference == -2) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
    } else if (choiceIndexDifference == 0) {
        console.log("You tied! You both chose " + humanChoice);
    } else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
    }
}

let humanScore = 0;
let computerScore = 0;

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
playRound(humanChoice, computerChoice);
