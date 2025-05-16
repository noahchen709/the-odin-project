const container = document.querySelector("#container");
const squaresPerSide = 4;

for (let i = 0; i < Math.pow(squaresPerSide, 2); i++) {
    const newSquare = document.createElement("div");
    newSquare.setAttribute("id", "square" + i);
    container.appendChild(newSquare);
}
