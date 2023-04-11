import { Socket } from "socket.io-client";
import { board } from "../../../board/board_class";
import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../../../board/sideCanvas/piecesTaken_class";
import blackPieces from "../../../pieces/blackPieces";
import whitePieces from "../../../pieces/whitePieces";
import doSinglePlayerEnd from "../../../player/doSinglePlayerEnd";
import { Player } from "../../../player/player_class";
import { EndGameObject, EndingGameTypes } from "../../../types/playerTypes";

const sendEnd = (
  type: EndingGameTypes,
  socket: Socket,
  player: Player,
  opponent: Player,
  winningColor: string
) => {
  //if single player no need to use server
  if (board.singlePlayer)
    return doSinglePlayerEnd(type, player, opponent, socket, winningColor);

  //can win by checkmate or win by timeout
  let winner: "white" | "black" | undefined = undefined;
  if (type === "checkmate") {
    winner = player.color as "white" | "black";
  } else if (type === "timeout") {
    winner =
      player.time === 0
        ? (opponent.color as "white" | "black")
        : (player.color as "white" | "black");
  }

  //create our object to send over
  const sendObject: EndGameObject = {
    pieces: { white: whitePieces, black: blackPieces },
    piecesTaken: {
      white: whitePiecesTaken.pieceArray,
      black: blackPiecesTaken.pieceArray,
    },
    method: type,
    winner: winner,
  };
  player.setTurn(false);
  opponent.setTurn(false);

  socket.emit("end-game", sendObject);
};
export default sendEnd;
