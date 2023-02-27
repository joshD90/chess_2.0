import drawSquare from "./draw/drawSquare";

//Set our variables which are the hook into the main index
const canvasContainer = document.querySelector(".canvasContainer");

const canvas = document.querySelector("#canvas") as HTMLCanvasElement;
canvas.height = canvas.width;

drawSquare();

// //check for resize
// window.addEventListener("resize", resizeBoard);
