const container = document.querySelector('.container');
const initialGridSize = 16;
createGrid(initialGridSize);

// Create nxn grid
function createGrid(gridSize) {
  // Reset when it gets updated
  container.innerHTML = '';
  for (let i = 0; i < gridSize * gridSize; i++) {
    // Create the grid items within the container
    const item = document.createElement('div');
    item.classList.add('item');
    // Add dynamic growth according to grid size
    item.style.flex = `1 0 calc(100% / ${gridSize})`;
    container.appendChild(item);
  }
}

// Individual squares
const items = document.querySelectorAll('.item');

// For each square, color them by adding an extra class
// with a different background color
items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hovered');
  });
});

// Slider
const slider = document.querySelector('.slider');
const gridValue = document.querySelector('.grid-value');

function updateGridSize() {
  const gridSize = slider.value;
  gridValue.textContent = `${gridSize} x ${gridSize}`;
  createGrid(gridSize);
}

slider.addEventListener('input', updateGridSize);

// Clear grid
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
  items.forEach((item) => {
    item.classList.remove('hovered');
  });
});

// Toggle eraser
const eraser = document.querySelector('.eraser');
// Track state of eraser
let isEraserToggled = false;

eraser.addEventListener('click', toggleEraser);

// Toggle eraser state
function toggleEraser() {
  isEraserToggled = !isEraserToggled;

  // If toggled, add the listener. Otherwise, remove it.
  if (isEraserToggled) {
    items.forEach((item) => {
      item.addEventListener('mouseover', handleEraser);
    });
  } else {
    items.forEach((item) => {
      item.removeEventListener('mouseover', handleEraser);
    });
  }
}

// Remove the 'hovered' class from the target item
function handleEraser(e) {
  e.target.classList.remove('hovered');
}
