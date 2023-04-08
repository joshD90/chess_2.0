import _ from "lodash";

import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../board/sideCanvas/piecesTaken_class";
import { legalDots } from "../legalMoves/pieceDirection/legalDots";
import blackPieces, { blackPiecesTemplate } from "../pieces/blackPieces";
import whitePieces, { whitePiecesTemplate } from "../pieces/whitePieces";

const resetBoard = (): void => {
  //make sure that each game starts with a clean slate of pieces

  whitePieces.splice(
    0,
    whitePieces.length,
    ..._.cloneDeep(whitePiecesTemplate)
  );
  blackPieces.splice(
    0,
    blackPieces.length,
    ..._.cloneDeep(blackPiecesTemplate)
  );
  whitePiecesTaken.pieceArray.length = 0;
  blackPiecesTaken.pieceArray.length = 0;
  legalDots.length = 0;
};

export default resetBoard;
