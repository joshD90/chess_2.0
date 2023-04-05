import { Socket } from "socket.io-client";

import whitePieces from "../../../pieces/whitePieces";
import blackPieces from "../../../pieces/blackPieces";
import { whitePiecesTaken } from "../../../board/sideCanvas/piecesTaken_class";
import { blackPiecesTaken } from "../../../board/sideCanvas/piecesTaken_class";
import { TurnObject } from "../../../types/playerTypes";
import { player, opponent } from "../../../player/player_class";
//since we have done all the hard work on this side ie checks etc, we can just send over the new arrays which will get passed to the other player
const sendTurnInformation = (socket: Socket) => {
  const turnObject: TurnObject = {
    pieces: { white: whitePieces, black: blackPieces },
    piecesTaken: {
      white: whitePiecesTaken.pieceArray,
      black: blackPiecesTaken.pieceArray,
    },
  };
  player.myTurn = false;
  opponent.myTurn = true;
  socket.emit("change-turn", turnObject);
};

export default sendTurnInformation;
