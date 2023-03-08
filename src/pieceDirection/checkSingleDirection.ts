import checkDirectionRecursively from "./checkDirectionRecursively";
import setDxDy from "./setDxDy";

import { PieceType } from "../types/pieceTypes";
import { Board } from "../board/board_class";

const checkSingleDirection = (
  direction: string,
  selectedPiece: PieceType,
  board: Board
) => {
  const coordDiff = setDxDy(direction, board);
  checkDirectionRecursively(
    coordDiff,
    selectedPiece.an,
    board,
    selectedPiece.range
  );
};

export default checkSingleDirection;
