const NUM = 16;
const boxWidth = ((1 / NUM) * 100) + "%";

const container = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => {
    prompt("How many boxes?");
    for (let newBox of newBoxes) {
        newBox.style.backgroundColor = "white";
    }
});

// Initialize boxes
for (let i = 0; i < (NUM ** 2); i++) {
    const newBox = document.createElement("div");
    newBox.style.width = `${boxWidth}`;
    newBox.style.aspectRatio = `1 / 1`;
    newBox.classList.add("newBox");
    container.appendChild(newBox);
}

let newBoxes = document.querySelectorAll(".newBox");

for (let newBox of newBoxes) {
    newBox.addEventListener("mouseenter", () => newBox.style.backgroundColor = "blue");
}