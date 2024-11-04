const NUM = 16;
drawBoxes(NUM);

const resetBtn = document.querySelector(".reset");

resetBtn.addEventListener("click", () => {
    let numberOfBoxes = +prompt("How many boxes?");
    while (numberOfBoxes > 100) {
        numberOfBoxes = +prompt("Please enter a number less than 100.");
    }
    drawBoxes(numberOfBoxes);
});

function drawBoxes(numberOfBoxes = 16) {
    const boxWidth = ((1 / numberOfBoxes) * 100) + "%";
    const container = document.querySelector(".container");

    // Clears existing boxes if there are any
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };

    for (let i = 0; i < (numberOfBoxes ** 2); i++) {
        const newBox = document.createElement("div");
        newBox.style.width = `${boxWidth}`;
        newBox.style.aspectRatio = `1 / 1`;
        newBox.classList.add("newBox");
        container.appendChild(newBox);
    }
    let newBoxes = document.querySelectorAll(".newBox");
    makeBoxesFillable(newBoxes);
}
    
function makeBoxesFillable(newBoxes) {
    for (let newBox of newBoxes) {
        newBox.addEventListener("mouseenter", () => newBox.style.backgroundColor = "blue");
    }
}