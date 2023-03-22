// const pieceSVG = document.getElementById("pieceSVG");

// const svgPiece = require("./assets/whitePieces/white_queen.svg") as SVGElement;
// const svgPiece = document.getElementById("pieceSVG");

// // const svgString = new XMLSerializer().serializeToString(pieceSVG!);

// // // Convert the SVG element to a string to be converted to blob
// var svgString = new XMLSerializer().serializeToString(svgPiece!);

const importedPiece = require("./assets/whitePieces/dummyWhiteQueen.svg");

//create our canvas
const canvas = document.getElementById("dummyCanvas") as HTMLCanvasElement;
//and context
const ctx = canvas.getContext("2d");

//create our image
const imageBlob = new Blob([importedPiece], { type: "image/svg+xml" });
const imageUrl = URL.createObjectURL(imageBlob);

const img = new Image();
img.height = 45;
img.width = 45;
img.src = imageUrl;

//set width, if we are narrow it should be horizontal
const setCanvasWidth = (): number => {
  const width =
    window.innerWidth < 720 ? window.innerWidth * 0.6 : window.innerWidth / 10;

  return width;
};

//if wide it should be vertical
const setCanvasHeight = (): number => {
  const height =
    window.innerWidth > 720
      ? window.innerHeight * 0.6
      : window.innerHeight / 10;

  return height;
};

const setSize = () => {
  canvas.width = setCanvasWidth();
  canvas.height = setCanvasHeight();
};
//draw piece tied to the height if horizontal and to the width if horizontal
//draw piece tied to the height if horizontal and to the width if horizontal
const drawPiece = () => {
  if (!ctx) return;
  if (window.innerWidth < 720) {
    ctx.drawImage(img, 0, 0, 45, 45, 0, 0, canvas.height, canvas.height);
  } else {
    ctx.drawImage(img, 0, 0, 45, 45, 0, 0, canvas.width, canvas.width);
  }
};
//set our canvas size
setSize();

window.addEventListener("resize", setSize);

//set up our event loop to draw the piece
const eventLoop = () => {
  requestAnimationFrame(() => {
    drawPiece();
    eventLoop();
  });
};

eventLoop();
