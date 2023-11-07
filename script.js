const container = document.querySelector('#grid-container');
const customGrid = document.querySelector('#custom-grid');
let gridSize = 16;

// for holding and dragging through the sketchpad to draw
let isDrawing = false;
container.addEventListener('mousedown', () => {
    isDrawing = true;
});

container.addEventListener('mouseup', () => {
    isDrawing = false;
});

container.addEventListener('mouseleave', () => {
    isDrawing = false;
});

function createGrid(gridSize) {
    container.innerHTML = '';
    for (let rows = 0; rows < parseInt(gridSize); rows++) {
        for (let columns = 0; columns < parseInt(gridSize); columns++) {
            const grid = document.createElement('div');
            grid.classList.add('grid');
            container.appendChild(grid);

            const gridDimensions = sideCalculator(gridSize);
            grid.style.width = gridDimensions+'px';
            grid.style.height = gridDimensions+'px';

            grid.addEventListener('mouseover', function (event) {
                if (isDrawing) {
                    event.target.style.backgroundColor = "red";
                }
            });
        }
    }
}

customGrid.addEventListener('click', function () {
    const newGridSize = parseInt(prompt("Enter a new grid size (e.g., 16):"));
    if (!isNaN(newGridSize)) {
        gridSize = newGridSize; // Update the gridSize
        createGrid(gridSize); // Recreate the grid with the new size
    } else {
        alert("Please enter a valid number for the grid size.");
    }
});

function sideCalculator(gridSize) {
    const result = 640 / gridSize;
    return Math.round(result * 100) / 100;
}

createGrid(gridSize);

// const customGrid = document.querySelector('#custom-grid');
// customGrid.addEventListener('click', function () {
//     const newGridSize = parseInt(prompt("Enter a new grid size (e.g., 16):"));
//     if (!isNaN(newGridSize)) {
//         gridSize = newGridSize; // Update the gridSize
//         createGrid(gridSize); // Recreate the grid with the new size
//     } else {
//         alert("Please enter a valid number for the grid size.");
//     }
// });