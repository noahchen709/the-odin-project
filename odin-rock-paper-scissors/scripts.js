const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const numToChoice = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };

    // 3 is the number of choices
    let randNumToThree = Math.floor(Math.random() * 3);
    let choice = choices[randNumToThree];
    return choice;
}

console.log(getComputerChoice());