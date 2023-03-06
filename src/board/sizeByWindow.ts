const sizeByWindow = (canvas: HTMLCanvasElement) => {
  //set a limiting size for the chess board
  if (window.innerWidth > 600 && window.innerHeight > 600) {
    canvas.width = 600;
    canvas.height = 600;
  }

  //if the limiting factor is height go by that else go by width
  if (window.innerHeight < window.innerWidth) {
    canvas.height = window.innerHeight * 0.8;
    canvas.width = window.innerHeight * 0.8;
  } else {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = canvas.width;
  }
};
export default sizeByWindow;
