import _ from "lodash";

import { PieceType } from "../../types/pieceTypes";
import { Board } from "../../board/board_class";
import checkSingleDirection from "./checkSingleDirection";
import { HypotheticalPosition, LegalMove } from "../../types/legalMoveTypes";

const checkAllDirections = (
  selectedPiece: PieceType,
  board: Board,
  moveArray: LegalMove[],
  position: HypotheticalPosition
): void => {
  //make sure that we are not mutating any of our nested properties while we do checks
  const selectedPieceCopy = _.cloneDeep(selectedPiece);

  selectedPiece.moveDirections.forEach((direction) => {
    checkSingleDirection(
      direction,
      selectedPieceCopy,
      board,
      moveArray,
      position
    );
  });
};

export default checkAllDirections;
