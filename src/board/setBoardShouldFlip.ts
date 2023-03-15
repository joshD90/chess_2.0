import { board } from "./board_class";

const setBoardShouldFlip = (e: Event) => {
  const flip = (e.target as HTMLInputElement).checked;
  board.setShouldFlip(flip);
};
export default setBoardShouldFlip;
