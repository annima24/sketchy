const container = document.querySelector("#container");
const changeGridBtn = document.querySelector('.changeGridBtn')
console.log(changeGridBtn)

function fillContainer(num) {
  createRows(num);
}

function createRows(num) {
  for (let i = 0; i < num; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    createCells(num, row);
    container.appendChild(row);
  }
}

function createCells(num, row) {
  for (let i = 0; i < num; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.addEventListener("mouseenter", colorCells);
    row.appendChild(cell);
  }
}

function colorCells(e) {
  e.target.style.backgroundColor = "blue";
}

changeGridBtn.addEventListener('click', function(){
    let newGridSize = prompt('How many squares per side? Number must be between 1-99')
    if (newGridSize > 100)   {
        return        
    } else if (newGridSize > 1 && newGridSize < 100) {
        container.textContent = '';
        fillContainer(newGridSize);
    }
})

fillContainer(60);
