import { Socket } from "socket.io-client";

import whitePieces from "../pieces/whitePieces";
import blackPieces from "../pieces/blackPieces";
import { whitePiecesTaken } from "../board/sideCanvas/piecesTaken_class";
import { blackPiecesTaken } from "../board/sideCanvas/piecesTaken_class";
import { TurnObject } from "../types/playerTypes";

const sendTurnInformation = (socket: Socket) => {
  const turnObject: TurnObject = {
    pieces: { white: whitePieces, black: blackPieces },
    piecesTaken: { white: whitePiecesTaken, black: blackPiecesTaken },
  };

  socket.emit("change-turn", turnObject);
};

export default sendTurnInformation;
