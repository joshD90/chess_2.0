import { board } from "../../board/board_class";
import { canvas } from "../../board/canvasContext";
import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { Piece } from "../../pieces/piece_class";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import flipBoard from "./flipBoard";
import setCheck from "./setCheck";

const promotePawn = (
  pieceChanging: PieceType,
  position: HypotheticalPosition,
  promotionPiece: PieceOffBoard
) => {
  //create our new piece
  const promotedPiece = new Piece(
    pieceChanging.color,
    pieceChanging.an,
    promotionPiece.type
  );

  //remove our pawn from the piece array and add in promoted piece
  const indexOfPawn =
    position[pieceChanging.color as "black" | "white"].indexOf(pieceChanging);

  position[pieceChanging.color as "black" | "white"].splice(
    indexOfPawn,
    1,
    promotedPiece
  );

  //reset the board to non queening state
  board.queeningSelection = false;

  //see whether this promotion has caused check
  const opponentColor = promotedPiece.color === "white" ? "black" : "white";

  setCheck(board, position, opponentColor);
  //do our turn
  flipBoard(board, canvas, position);
};

export default promotePawn;
