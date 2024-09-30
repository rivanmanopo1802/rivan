// window element 
window.addEventListener('load', ()=>{
    resizeBy(); //Resize the canvas once the window loads
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
})

// declare variables
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d'); // canvs for 2 dimensional operations
let coord = {x:0 , y:0}; // Stores the initial position of the cursor
let paint = false; // trigger drawing

//resizes the canvas to the available size of the window.
function resize(){
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}
// Updates the coordinates of the curson
function getPosition (event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
}
// start and stop drawing
function startPainting (event) {
    paint = true;
    getPosition (event);
}
function stopPaintingol {
paint = false;
}

function stopPainting(){
    paint = false;
}

function sketch(event){
    if (!paint) return;
    
}
