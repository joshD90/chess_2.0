import { Coord } from "../../types/boardTypes";
import { board } from "../board_class";
const setQueeningCoords = (position: number): Coord => {
  const center = board.width / 2;
  const squareWidth = board.width / 8;
  const halfSquareWidth = board.width / 16;
  //could do this iteratively based on the position however it is  simpler and more readable to do it this way
  switch (position) {
    case 1:
      return { x: center - squareWidth * 1.5, y: center };
    case 2:
      return { x: center - halfSquareWidth, y: center };
    case 3:
      return { x: center + halfSquareWidth, y: center };
    case 4:
      return { x: center + squareWidth * 1.5, y: center };
    default:
      return { x: 0, y: 0 };
  }
};

export default setQueeningCoords;
