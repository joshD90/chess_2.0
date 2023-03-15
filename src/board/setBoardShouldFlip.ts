import { board } from "./board_class";

const setBoardShouldFlip = (e: Event) => {
  const flip = (e.target as HTMLInputElement).checked;
  console.log(flip);
  board.setShouldFlip(flip);
  console.log(board.shouldFlip);
};
export default setBoardShouldFlip;
