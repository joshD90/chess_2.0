import blackPieces from "../../pieces/blackPieces";
import whitePieces from "../../pieces/whitePieces";
import { AN } from "../../types/boardTypes";
import { Board } from "../../board/board_class";

const hitsOpponentPiece = (an: AN, board: Board): boolean => {
  const opponentPiece = board.color === "white" ? blackPieces : whitePieces;
  //see whether the square we are landing on hits the other player
  const hitsOpponent = opponentPiece.some(
    (piece) => piece.an.row === an.row && piece.an.col === an.col
  );

  return hitsOpponent;
};

export default hitsOpponentPiece;
