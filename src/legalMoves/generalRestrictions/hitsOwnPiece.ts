import blackPieces from "../../pieces/blackPieces";
import whitePieces from "../../pieces/whitePieces";

import { Board } from "../../board/board_class";
import { AN } from "../../types/boardTypes";

const hitsOwnPiece = (an: AN, board: Board): boolean => {
  //select which pieces we wish to use based on our player
  const ownPieces = board.color === "white" ? whitePieces : blackPieces;
  //check whether the coords that we feed in match any of the coords of our pieces
  const hitsPiece = ownPieces.some(
    (piece) => piece.an.row === an.row && piece.an.col === an.col
  );

  return hitsPiece;
};

export default hitsOwnPiece;
