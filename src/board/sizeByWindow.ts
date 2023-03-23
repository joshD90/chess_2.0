const sizeByWindow = (canvas: HTMLCanvasElement): void => {
  //set a limiting size for the chess board
  if (window.innerWidth > 600 && window.innerHeight > 600) {
    canvas.width = 600;
    canvas.height = 600;
    return;
  }
  if (window.innerHeight > window.innerWidth && window.innerWidth < 600) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    return;
  }

  //if the limiting factor is height go by that else go by width
  if (window.innerHeight < window.innerWidth) {
    canvas.height = window.innerHeight * 0.8;
    canvas.width = window.innerHeight * 0.8;
    return;
  } else {
    canvas.width = window.innerWidth * 0.8;
    canvas.height = canvas.width;
    return;
  }
};
export default sizeByWindow;
