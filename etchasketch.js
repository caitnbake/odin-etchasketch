const NUM = 16;
const container = document.querySelector(".container");

// Ensures the right number of rows/columns fill up the container
const boxWidth = ((1 / NUM) * 100) + "%";

// Initialize boxes
for (let i = 0; i < (NUM ** 2); i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxWidth}`;
    newBox.style.aspectRatio = `1 / 1`;
    newBox.style.border = "1px solid black"
    newBox.classList.add("newBox");
    container.appendChild(newBox);
}

let newBoxes = document.querySelectorAll(".newBox");

for (let newBox of newBoxes) {
    newBox.addEventListener("mouseenter", () => newBox.style.backgroundColor = "blue");
}