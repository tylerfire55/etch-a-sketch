let gridSize = 16;
let currentColor = "white";
const colorPicker = document.querySelector(".colorPicker");
let userInput = document.querySelector(".gridSize");

//Grid creation
const grid = document.querySelector(".grid")
function gridCreate(gridSize) {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    for (let i = 0; i < (gridSize*gridSize); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener("mouseover", setColor);
        cell.addEventListener("mousedown", setColor);
        grid.appendChild(cell);
    }
}
gridCreate(gridSize);

//Color selector
function setColor(e){
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

colorPicker.addEventListener("input", e=>{
    currentColor = e.target.value;
})

let mouseDown = false;
grid.addEventListener("mousedown", e => {mouseDown = true})
grid.addEventListener("mouseup", e => {mouseDown = false})


//Accept user entry for grid size
userInput.addEventListener("input", e => {
    gridSize = userInput.value;
})

//