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
};

export interface TurnObject {
  pieces: { white: Piece[]; black: Piece[] };
  piecesTaken: { white: PiecesTaken; black: PiecesTaken };
}
export interface WinTurnObject extends TurnObject {
  win: { status: boolean; method: "checkmate" };
}
export interface LoseTurnObject extends TurnObject {
  lose: { status: boolean; method: "timemout" };
}
export interface DrawTurnObject extends TurnObject {
  draw: { status: boolean; method: "insufficient" | "stalemate" };
}
