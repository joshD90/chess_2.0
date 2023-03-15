import { GridSquare } from "../../types/boardTypes";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";

const setCastle = (
  position: HypotheticalPosition,
  pieceToChange: PieceType,
  squareToDrop: GridSquare
) => {
  const piecesToChange = position[pieceToChange.color as "white" | "black"];
  const rookCol = squareToDrop.an.col === "c" ? "a" : "h";
  const rookAN = { col: rookCol, row: pieceToChange.an.row };
  const rookLandingCol = squareToDrop.an.col === "c" ? "d" : "f";

  const rookToChange = piecesToChange.find(
    (piece) => piece.an.col === rookAN.col && piece.an.row === rookAN.row
  );
  if (!rookToChange) return;

  rookToChange.an.col = rookLandingCol;
};

export default setCastle;
