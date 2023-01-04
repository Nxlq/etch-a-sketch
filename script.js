const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
const defaultGridSize = 32;
let currentGridSize = defaultGridSize;

let mouseDown = false;
body.addEventListener('mousedown', function(e){
    e.preventDefault();
    console.log(e);
    mouseDown = true;
    console.log(mouseDown);
});

body.addEventListener('mouseup', function(e){
    e.preventDefault();
    console.log(e);
    mouseDown = false;
    console.log(mouseDown);
});

function createGrid(){
    const boxSizeHeight =  `${450 / currentGridSize}px`;
    const boxSizeWidth = `${750 / currentGridSize}px`;
    for(let  i= 0; i < currentGridSize * currentGridSize; i++){
        const gridSqaure = document.createElement('div');
        gridSqaure.classList.add('grid-square');
        gridSqaure.style.width = boxSizeWidth;
        gridSqaure.style.height = boxSizeHeight;
        gridContainer.appendChild(gridSqaure);
    };
    
};

createGrid();

const gridSquares = document.querySelectorAll('.grid-square');
console.log(gridSquares);

gridSquares.forEach(function(square){
    square.addEventListener('mouseover', drawTrail);
    square.addEventListener('mousedown', drawTrail);
    // square.addEventListener('mouseout', function(){
    //     square.classList.remove('dragged');
    // })
})

function drawTrail(e){
    if(e.type === "mouseover" && !mouseDown) return;
        e.target.style.backgroundColor = 'pink';
}

