export type AN = {
  col: string;
  row: number;
};

export type Coord = {
  x: number;
  y: number;
};

export type PieceType = {
  color: string;
  an: AN;
  type: string;
  moveDirections: string[];
  range: number;
  image: HTMLImageElement;
  isActivated: boolean;
  movingCoord: Coord;
  firstMove: boolean;
  inCheck: boolean;
  isQueening: boolean;
  isEnPassante: boolean;
  activate: () => boolean;
  deactivate: () => boolean;
  setMovingCoord: (mouseCoord: Coord) => Coord;
  setMoveDirections: () => any;
};

export type PieceOffBoard = {
  color: "white" | "black";
  type: string;
  image: HTMLImageElement;
  position: number;
  coord: Coord;
  numberOf?: number;
  value: number;
  setImage: () => any;
  setCoord: () => any;
  setValue: () => any;
};

export type PiecesTaken = {
  color: string;
  context: CanvasRenderingContext2D;
  pieceArray: PieceOffBoard[];
  alignment: "vertical" | "horizontal";
  squareWidth: number;
  setContext: () => any;
  setPieceArrayCoords: () => any;
  drawPieces: () => any;
  resizeBoard: () => any;
};
