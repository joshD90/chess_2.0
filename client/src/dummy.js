const pieceSVG = document.getElementById("pieceSVG");
// get svg viewBox
let vB = pieceSVG.viewBox.baseVal;

// check width/height attributes
let attW = +pieceSVG.getAttribute("width");
let attH = +pieceSVG.getAttribute("height");

// take either viewBox width/height or dimensions inherited from attributes
let svgW = vB.width ? vB.width : attW;
let svgH = vB.height ? vB.height : attH;
let aspect = svgW / svgH;

// expected result: 45x45
//console.log(aspect, svgW, svgH)

// Convert the SVG element to a string to be converted to blob
var svgString = new XMLSerializer().serializeToString(pieceSVG);

//create our canvas and context
const canvas = document.getElementById("dummyCanvas");

// desired width/height
let dpi = 1200;
let scale = dpi / 72;
let w = svgW * scale;
let h = w / aspect;

canvas.width = w;
canvas.height = h;
const ctx = canvas.getContext("2d");

// create our image in blob format and then create url for it
const imageBlob = new Blob([svgString], {
  type: "image/svg+xml",
});
const imageUrl = URL.createObjectURL(imageBlob);

const img = new Image();
img.src = imageUrl;

img.onload = (e) => {
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
