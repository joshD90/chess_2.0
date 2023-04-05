import { Socket } from "socket.io-client";
import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../../../board/sideCanvas/piecesTaken_class";
import blackPieces from "../../../pieces/blackPieces";
import whitePieces from "../../../pieces/whitePieces";
import { Player } from "../../../player/player_class";
import { EndGameObject, EndingGameTypes } from "../../../types/playerTypes";

const sendEnd = (
  type: EndingGameTypes,
  socket: Socket,
  player: Player,
  opponent: Player
) => {
  const winner =
    type === "checkmate" ? (player.color as "white" | "black") : undefined;

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
