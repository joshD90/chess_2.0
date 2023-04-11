const maxCanvWidth = 500;

const sizeByWindow = (canvas: HTMLCanvasElement): void => {
  //set a limiting size for the chess board no matter how wide the screen goes
  if (window.innerWidth > maxCanvWidth && window.innerHeight > maxCanvWidth) {
    canvas.width = maxCanvWidth;
    canvas.height = maxCanvWidth;
    return;
  }

  if (window.innerHeight > window.innerWidth) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    return;
  }

  //if the limiting factor is height go by that else go by width
  if (window.innerHeight < window.innerWidth) {
    canvas.height = window.innerHeight * 0.6;
    canvas.width = window.innerHeight * 0.6;
    return;
  } else {
    canvas.width = window.innerWidth * 0.6;
    canvas.height = canvas.width;
    return;
  }
};
export default sizeByWindow;
