import _ from "lodash";

import { PieceType } from "../../types/pieceTypes";
import { Board } from "../../board/board_class";
import checkSingleDirection from "./checkSingleDirection";
import { LegalMove } from "../../types/legalMoveTypes";

const checkAllDirections = (
  selectedPiece: PieceType,
  board: Board,
  moveArray: LegalMove[],
  whitePieces: PieceType[],
  blackPieces: PieceType[]
): void => {
  //make sure that we are not mutating any of our nested properties while we do checks
  const shallowSelectedPiece = _.cloneDeep(selectedPiece);
  selectedPiece.moveDirections.forEach((direction) => {
    checkSingleDirection(
      direction,
      shallowSelectedPiece,
      board,
      moveArray,
      whitePieces,
      blackPieces
    );
  });
};

export default checkAllDirections;
