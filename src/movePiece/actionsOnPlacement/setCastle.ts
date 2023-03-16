import { GridSquare } from "../../types/boardTypes";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";

const setCastle = (
  position: HypotheticalPosition,
  pieceToChange: PieceType,
  squareToDrop: GridSquare
) => {
  //set all our variables depending on which way we are castling and which color is castling
  const piecesToChange = position[pieceToChange.color as "white" | "black"];
  const rookCol = squareToDrop.an.col === "c" ? "a" : "h";
  const rookAN = { col: rookCol, row: pieceToChange.an.row };
  const rookLandingCol = squareToDrop.an.col === "c" ? "d" : "f";
  //the king will be dropped on the correct square anyways so we just need to change our rook piece
  const rookToChange = piecesToChange.find(
    (piece) => piece.an.col === rookAN.col && piece.an.row === rookAN.row
  );
  if (!rookToChange) return;
  //we only need to adjust the column of the rook as it will always be on the same row
  rookToChange.an.col = rookLandingCol;
};

export default setCastle;
