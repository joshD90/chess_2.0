import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";

const setTakenPieceCoord = (
  alignment: "horizontal" | "vertical",
  pieces: PieceOffBoard[],
  width: number
) => {
  if (pieces.length === 0) return null;

  const sortedPieces = pieces.sort((a, b) => a.value - b.value);

  if (alignment === "vertical") {
    sortedPieces.forEach((piece, index) => {
      const x = width / 2;
      const y = index * width + width / 2;
      piece.coord.x = x;
      piece.coord.y = y;
    });
  }
  if (alignment === "horizontal") {
    sortedPieces.forEach((piece, index) => {
      const x = index * width + width / 2;
      const y = width / 2;
      piece.coord.x = x;
      piece.coord.y = y;
    });
  }
};
export default setTakenPieceCoord;
