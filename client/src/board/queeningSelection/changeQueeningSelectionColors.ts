import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { Board } from "../board_class";

const changeQueeningSelectionColors = (
  board: Board,
  queeningSelectPieces: PieceOffBoard[]
) => {
  const updated = queeningSelectPieces.map(
    (piece) =>
      new PieceOffBoard(
        board.color as "white" | "black",
        piece.type,
        piece.position
      )
  );
  return updated;
};

export default changeQueeningSelectionColors;
