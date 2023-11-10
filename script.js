const container = document.querySelector('#grid-container');
const customGrid = document.querySelector('#custom-grid');
const gridSizeSlider = document.querySelector('#grid-size-slider');
const gridSizeLabel = document.querySelector('#slider-value');

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
                    event.target.style.backgroundColor = "#D8D4EC";
                }
            });
        }
    }
}

function sideCalculator(gridSize) {
    const result = 640 / gridSize;
    return Math.round(result * 100) / 100;
}

// grid slider event handler to implement the conditions
gridSizeSlider.addEventListener('input', function () {
    const newGridSize = parseInt(gridSizeSlider.value);
    gridSize = newGridSize; // Update the gridSize
    gridSizeLabel.textContent = newGridSize; // Update the label
    createGrid(gridSize); // Recreate the grid with the new size
});

createGrid(16);