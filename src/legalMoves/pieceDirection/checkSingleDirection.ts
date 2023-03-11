import checkDirectionRecursively from "./checkDirectionRecursively";
import setDxDy from "./setDxDy";
import adjustRange from "./adjustRange";

import { PieceType } from "../../types/pieceTypes";
import { Board } from "../../board/board_class";
import { LegalMove } from "../../types/legalMoveTypes";

const checkSingleDirection = (
  direction: string,
  selectedPiece: PieceType,
  board: Board,
  moveArray: LegalMove[]
) => {
  //adjust our range depending on first move / pawn move etc
  const range = adjustRange(selectedPiece, direction);

  //we get our directional coordinate differences before running the recursive function to save on overhead as these wont change for the direction
  const coordDiff = setDxDy(direction, board);
  checkDirectionRecursively(
    coordDiff,
    selectedPiece.an,
    board,
    range,
    moveArray
  );
};

export default checkSingleDirection;
