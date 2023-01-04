const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
const btnClear = document.querySelector('.btn-clear');

const classicGridColor = 'rgb(236, 232, 190)'
const classicGridTrailColor = '#1d1d1d'



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
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.style.width = boxSizeWidth;
        gridSquare.style.height = boxSizeHeight;
        gridSquare.style.backgroundColor = 'rgb(236, 232, 190)';
        gridContainer.appendChild(gridSquare);
    };
    
};

createGrid();

const gridSquares = document.querySelectorAll('.grid-square');
console.log(gridSquares);

gridSquares.forEach(function(square){
    square.addEventListener('mouseover', drawTrailClassic);
    square.addEventListener('mousedown', drawTrailClassic);
    // square.addEventListener('mouseout', function(){
    //     square.classList.remove('dragged');
    // })
})

function drawTrailClassic(e){
   if(e.type === 'mouseover' && !mouseDown) return;
   e.target.style.backgroundColor = '#1d1d1d';
}

btnClear.addEventListener('click', () => {
        gridSquares.forEach(square => square.style.backgroundColor = 'rgb(236, 232, 190)')
    });

function drawTrailConfetti(e){
    console.log(e);
}
drawTrailConfetti();