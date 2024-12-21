const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    // 3 is the number of choices
    let randNumToThree = Math.floor(Math.random() * 3);
    let choice = choices[randNumToThree];
    return choice;
}

console.log(getComputerChoice());