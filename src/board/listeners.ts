import { resizeBoard } from "./boardResize";

//we need to make sure that our canvas is sized to our window
const addListeners = () => {
  window.addEventListener("resize", resizeBoard);
};

export default addListeners;
