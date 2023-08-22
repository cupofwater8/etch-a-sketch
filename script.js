const container = document.querySelector('.container');
const gridSize = 4;

// probably make function later
// Create the nxn grid
for (let i = 0; i < gridSize; i++) {
  // Create the specified amount of col divs
  const col = document.createElement('div');
  col.classList.add('col');

  for (let j = 0; j < gridSize; j++) {
    // Create the specified amount of item divs
    // and add them to the col
    const item = document.createElement('div');
    item.classList.add('item');
    col.appendChild(item);
  }

  // After filling the col, add the col to the overall container
  container.appendChild(col);
}
