const container = document.querySelector("#container");
let squaresPerSide = 16;
let totalSquares = Math.pow(squaresPerSide, 2);

container.style.setProperty('--squares-per-side', squaresPerSide);

function generateGrid(numOfSquares) {
    for (let i = 0; i < numOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.setAttribute("id", "square" + i);
        newSquare.classList.add("newSquare");
        newSquare.addEventListener("mouseover", () => {
            newSquare.classList.add("penColor");
        });
    
        container.appendChild(newSquare);
    }
}

generateGrid(totalSquares);

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    // Remove the previous grid
    container.innerHTML = "";
    let input = prompt("Enter the number of squares per side: ");
    while(isNaN(squaresPerSide)) {
        input = prompt("Enter the number of squares per side: ");
    }
    squaresPerSide = parseInt(input);
    container.style.setProperty('--squares-per-side', squaresPerSide);
    totalSquares = Math.pow(squaresPerSide, 2);
    generateGrid(totalSquares);
});