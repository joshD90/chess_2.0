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

export type EndingGameTypes =
  | "checkmate"
  | "timeout"
  | "insufficient"
  | "stalemate"
  | "insufficientVsTimeout";

export interface EndGameObject extends TurnObject {
  method: EndingGameTypes;
  winner?: "white" | "black";
}
