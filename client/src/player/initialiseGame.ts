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
  socket: Socket
) => {
  //alter our two player classes
  player.name = playerName;
  player.time = time;

  opponent.name = opponentName;
  opponent.time = time;

  //set up our board
  board.color = playerColor;
  board.makeGrid();
  addListeners(socket);
  //set up timer
  player.setTime();
  opponent.setTime();
  //the pieces are instantiated prior to the board color being set we need to redefine the move directions based on the newly set board color
  flipBoard(board, canvas, { white: whitePieces, black: blackPieces }, true);

  whitePiecesTaken.context = whitePiecesTaken.setContext();
  blackPiecesTaken.context = blackPiecesTaken.setContext();

  eventLoop();
};

export default initialiseGame;
