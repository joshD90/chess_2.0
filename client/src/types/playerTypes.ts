import { PiecesTaken } from "../board/sideCanvas/piecesTaken_class";
import { PieceOffBoard } from "../pieces/pieceOffBoard_class";
import { Piece } from "../pieces/piece_class";
import { PieceType } from "./pieceTypes";

export type TimeInMinutes = {
  mins: number;
  secs: string;
};

export type ColorObject = {
  white: string;
  black: string;
};

export type NameObject = {
  [key: string]: string;
};

export type StartGameObject = {
  colors: ColorObject;
  names: NameObject;
  time: number;
};

export type EndingGameTypes =
  | "checkmate"
  | "timeout"
  | "insufficient"
  | "stalemate"
  | "insufficientVsTimeout";

export interface TurnObject {
  pieces: { white: Piece[]; black: Piece[] };
  piecesTaken: { white: PieceOffBoard[]; black: PieceOffBoard[] };
}
export interface EndGameObject extends TurnObject {
  method: EndingGameTypes;
  winner?: "white" | "black";
}
