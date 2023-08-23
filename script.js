const container = document.querySelector('.container');
const gridSize = 10;
createGrid(gridSize);

// Create nxn grid
function createGrid(gridSize) {
  for (let i = 0; i < gridSize * gridSize; i++) {
    // Create the grid items within the container
    const item = document.createElement('div');
    item.classList.add('item');
    // Add dynamic growth according to grid size
    item.style.flex = `1 0 calc(100% / ${gridSize})`;
    container.appendChild(item);
  }
}
