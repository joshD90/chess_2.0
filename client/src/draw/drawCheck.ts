import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import { ctx } from "../board/canvasContext";
import anToCoord from "../utils/anToCoord";
import { board } from "../board/board_class";
import drawSquare from "./drawSquare";

const drawCheck = () => {
  if (!ctx) return;

  const allPieces = [...blackPieces, ...whitePieces];

  allPieces.forEach((piece) => {
    if (!piece.inCheck) return;
    const coord = anToCoord(piece.an, board);
    drawSquare(coord, "rgba(168, 2, 2,0.6)");
  });
};

export default drawCheck;
