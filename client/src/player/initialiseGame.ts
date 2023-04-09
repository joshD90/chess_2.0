import addListeners from "../board/listeners";
import { player } from "./player_class";
import { opponent } from "./player_class";
import { board } from "../board/board_class";

import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import flipBoard from "../movePiece/actionsOnPlacement/flipBoard";
import { canvas } from "../board/canvasContext";
import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../board/sideCanvas/piecesTaken_class";
import eventLoop from "../board/eventLoop";
import { Socket } from "socket.io-client";

const initialiseGame = (
  playerColor: "white" | "black",
  time: number,
  playerName: string,
  opponentName: string,
  socket: Socket,
  singlePlayer: boolean
) => {
  //alter our two player classes
  player.name = playerName;
  player.time = time;
  player.setColor(playerColor);
  player.setTurn(playerColor === "white" ? true : false);
  player.setInitialTime(time);

  opponent.name = opponentName;
  opponent.time = time;
  opponent.setColor(playerColor === "white" ? "black" : "white");
  opponent.setTurn(playerColor === "white" ? false : true);
  opponent.setInitialTime(time);

  //set up our board
  board.color = playerColor;
  board.shouldFlip = true;

  board.makeGrid();
  addListeners(socket);
  //set up timer
  player.setTime();
  opponent.setTime();

  flipBoard(board, canvas, { white: whitePieces, black: blackPieces }, true);

  //once we have carried out this flip we can now set our board to not flip for multiplayer games
  singlePlayer ? (board.singlePlayer = true) : (board.singlePlayer = false);
  singlePlayer ? board.setShouldFlip(true) : board.setShouldFlip(false);

  whitePiecesTaken.context = whitePiecesTaken.setContext();
  blackPiecesTaken.context = blackPiecesTaken.setContext();

  eventLoop();
};

export default initialiseGame;
