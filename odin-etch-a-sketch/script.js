const container = document.querySelector("#container");
const squaresPerSide = 4;
const totalSquares = Math.pow(squaresPerSide, 2);

container.style.setProperty('--squares-per-side', squaresPerSide);

for (let i = 0; i < totalSquares; i++) {
    const newSquare = document.createElement("div");
    newSquare.setAttribute("id", "square" + i);
    newSquare.classList.add("newSquare");

    container.appendChild(newSquare);
}
