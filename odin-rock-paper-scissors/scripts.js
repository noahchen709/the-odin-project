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