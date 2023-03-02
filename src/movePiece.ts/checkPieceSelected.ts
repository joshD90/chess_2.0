import anToCoord from "../utils/anToCoord";
import detectWithinSquare from "./detectWithinSquare";
import { PieceType } from "../types/pieceTypes";
import { board } from "../board/board_class";

import { Coord } from "../types/boardTypes";

const checkPieceSelected = (
  playerPieces: PieceType[],
  mousePos: Coord
): null | PieceType => {
  const matchingPiece = playerPieces.find((piece) => {
    const coord = anToCoord(piece.an, board);
    return detectWithinSquare(coord, mousePos, board.width);
  });
  if (!matchingPiece) return null;
  return matchingPiece;
};

export default checkPieceSelected;
