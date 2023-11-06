const container = document.querySelector('#container');

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

for (let rows = 0; rows < 16; rows++) {
    for (let columns = 0; columns < 16; columns++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', function(event) {
            if (isDrawing) {
                event.target.style.backgroundColor = "red";
            }
        });
    }
}