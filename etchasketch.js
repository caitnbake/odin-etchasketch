const NUM = 16;
drawBoxes(NUM);

const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".clear");

resetBtn.addEventListener("click", () => {
    let numberOfBoxes = +prompt("How many boxes?");
    while (numberOfBoxes > 100) {
        numberOfBoxes = +prompt("Please enter a number less than 100.");
    }
    drawBoxes(numberOfBoxes);
});

clearBtn.addEventListener("click", clearGrid);

function clearGrid() {
    let existingBoxes = document.querySelectorAll(".newBox");
    for (let box of existingBoxes) {
        box.style.backgroundColor = "white";
    }
}

function drawBoxes(numberOfBoxes = 16) {
    const boxWidth = ((1 / numberOfBoxes) * 100) + "%";
    const container = document.querySelector(".container");

    // Deletes existing boxes if there are any
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
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        newBox.addEventListener("mouseenter", () => newBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);
    }
}