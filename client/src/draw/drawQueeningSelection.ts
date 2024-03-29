import { queeningSelection } from "../board/queeningSelection/queeningSelection_Class";
import { board } from "../board/board_class";
import drawSquare from "./drawSquare";
import { drawPieceByCoord } from "./drawSinglePiece";
import { ctx } from "../board/canvasContext";

const drawQueeningSelection = () => {
  //dont draw if the board is not set to queening status
  if (!board.queeningSelection) return;
  //first draw a square background and then draw the piece
  queeningSelection.pieceArray.forEach((piece) => {
    if (!ctx) return;
    drawSquare(piece.coord, "lightgray");
    drawPieceByCoord(piece.coord, board.width / 8, piece, ctx);
  });
};

export default drawQueeningSelection;
