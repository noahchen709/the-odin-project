const container = document.querySelector("#container");
const squaresPerSide = 16;
const totalSquares = Math.pow(squaresPerSide, 2);

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