import _ from "lodash";

import { PieceType } from "../types/pieceTypes";
import { Board } from "../board/board_class";
import checkSingleDirection from "./checkSingleDirection";
import { legalDots } from "./legalDots";

const checkAllDirections = (selectedPiece: PieceType, board: Board): void => {
  //clear the legal moves array
  legalDots.length = 0;
  //make sure that we are not mutating any of our nested properties while we do checks
  const shallowSelectedPiece = _.cloneDeep(selectedPiece);
  selectedPiece.moveDirections.forEach((direction) => {
    checkSingleDirection(direction, shallowSelectedPiece, board);
  });
};

export default checkAllDirections;
