const gridContainer = document.querySelector('.grid-container');
const body = document.querySelector('body');
const btnClear = document.querySelector('.btn-clear');
const btnClassic = document.querySelector('.btn-classic');
const btnConfetti = document.querySelector('.btn-confetti');
const btnCustom = document.querySelector('btn-custom');
const btnChangeSizeSmall = document.querySelector('#small')
const btnChangeSizeMedium = document.querySelector('#medium')
const btnChangeSizeLarge = document.querySelector('#large')


const classicGridColor = 'rgb(236, 232, 190)'
const classicGridTrailColor = '#1d1d1d'

const smallTrailSize = 30;
const mediumTrailSize = 50;
const largeTrailSize = 70;

let defaultColor = classicGridColor;
let defaultGridTrail = classicGridTrailColor;

let currentGridTrailColor = classicGridTrailColor;
let currentGridColor = classicGridColor;
let currentGridSize = smallTrailSize;

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
    console.log(`currnet grid size: ${gridContainer.childElementCount}`);
    if(gridContainer.lastElementChild){
        while(gridContainer.lastElementChild){
            gridContainer.removeChild(gridContainer.lastElementChild);
            }
            console.log(gridContainer.childElementCount)
        };
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
    const gridSquares = document.querySelectorAll('.grid-square');

    gridSquares.forEach(function(square){
        square.addEventListener('mouseover', drawTrailClassic);
        square.addEventListener('mousedown', drawTrailClassic);
    });
    console.log(`after grid size: ${gridContainer.childElementCount}`);

};

createGrid();


function drawTrailClassic(e){
   if(e.type === 'mouseover' && !mouseDown) return;
   e.target.style.backgroundColor = currentGridTrailColor;
}

btnChangeSizeSmall.addEventListener('click', changeTrailSize)

btnChangeSizeMedium.addEventListener('click', changeTrailSize)

btnChangeSizeLarge.addEventListener('click', changeTrailSize)

btnClear.addEventListener('click', () => {
    gridContainer.childNodes.forEach(child => child.style.backgroundColor = currentGridColor);
    });

function changeTrailSize(){
    if(this.id === 'small') currentGridSize = smallTrailSize;
    if(this.id === 'medium') currentGridSize = mediumTrailSize;
    if(this.id === 'large') currentGridSize = largeTrailSize;
    createGrid();
}

