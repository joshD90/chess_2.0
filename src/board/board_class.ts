import { GridCoord } from "../types/boardTypes";
import defineGrid from "./defineGrid";

export class Board {
  canvas: HTMLCanvasElement;
  width: number;
  squareWidth: number;
  grid: GridCoord[] = [];
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
  getGrid() {
    return this.grid;
  }
}
