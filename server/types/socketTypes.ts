import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";
import { PieceOffBoard, PiecesTaken, PieceType } from "./pieceTypes";

export type MyServer = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap
>;

export type RoomMap = Map<string, Set<string>>;

export interface TurnObject {
  pieces: { white: PieceType[]; black: PieceType[] };
  piecesTaken: { white: PieceOffBoard[]; black: PieceOffBoard[] };
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
