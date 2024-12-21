function getComputerChoice() {
    const numToChoice = {
        1: "rock",
        2: "paper",
        3: "scissors"
    };

    // 3 is the number of choices
    randNumToThree = Math.ceil(Math.random() * 3);
    choice = numToChoice[randNumToThree];
    return choice;
}

console.log(getComputerChoice());