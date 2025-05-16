const container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    const newSquare = document.createElement("div");
    newSquare.setAttribute("id", "square" + i);
    container.appendChild(newSquare);
}