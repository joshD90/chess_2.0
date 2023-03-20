import drawTakenPieces from "../../draw/drawTakenPieces";
import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { board } from "../board_class";
import getSideCanvasContext from "./getSideCanvasContext";
import setTakenPieceCoord from "./setTakenPieceCoord";
import sideSizeByWindow from "./sideSizeByWindow";

export class PiecesTaken {
  color: string;
  context: CanvasRenderingContext2D;
  pieceArray: PieceOffBoard[];
  alignment: "vertical" | "horizontal";
  squareWidth: number;

  constructor(color: string) {
    this.color = color;
    this.context = this.setContext();
    this.pieceArray = [];
    this.alignment = "vertical";
    this.squareWidth = 45;
  }

  setContext() {
    return getSideCanvasContext(this.color, board.color as "white" | "black");
  }

  setPieceArrayCoords() {
    setTakenPieceCoord(this.alignment, this.pieceArray, this.squareWidth);
  }
  drawPieces() {
    drawTakenPieces(this.context, this.pieceArray, this.squareWidth);
  }
  resizeBoard(sideCanvas: HTMLCanvasElement) {
    sideSizeByWindow(sideCanvas);
    this.squareWidth =
      window.innerWidth / 15 > 45 ? 45 : window.innerWidth / 15;
    if (window.innerWidth < 720) {
      this.alignment = "horizontal";
      this.setPieceArrayCoords();
    } else {
      this.alignment = "vertical";
      this.setPieceArrayCoords();
    }
  }
}

export const whitePiecesTaken = new PiecesTaken("white");
export const blackPiecesTaken = new PiecesTaken("black");
