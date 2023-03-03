import drawAllSquares from "../draw/drawAllSquares";
import drawAll from "../draw/drawAll";
import { GridSquare } from "../types/boardTypes";
import { canvas } from "./canvasContext";
import defineGrid from "./defineGrid";
import resetSquarePos from "./setSquarePos";

export class Board {
  canvas: HTMLCanvasElement;
  width: number;
  squareWidth: number;
  grid: GridSquare[] = [];
  color: string;

  constructor(canvas: HTMLCanvasElement, color: string) {
    this.canvas = canvas;
    this.width = canvas.width;
    this.squareWidth = this.width / 8;
    this.color = color;
  }

  makeGrid() {
    this.grid = defineGrid();
  }

  updateSquarePos() {
    this.grid = resetSquarePos(this.grid, this.color, this.width);
  }
  getGrid() {
    return this.grid;
  }
  resizeBoard(canvas: HTMLCanvasElement) {
    this.width = canvas.width;
    this.squareWidth = this.width / 8;
    this.updateSquarePos();
  }
}

export const board = new Board(canvas, "white");
