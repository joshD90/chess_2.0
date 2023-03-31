import _ from "lodash";
import { Socket } from "socket.io-client";
import {
  blackPiecesTaken,
  whitePiecesTaken,
} from "../../board/sideCanvas/piecesTaken_class";
import { legalDots } from "../../legalMoves/pieceDirection/legalDots";
import blackPieces, { blackPiecesTemplate } from "../../pieces/blackPieces";
import whitePieces, { whitePiecesTemplate } from "../../pieces/whitePieces";

const sendUserInformation = (socket: Socket) => {
  //get our form information
  const startGameForm = document.querySelector(
    ".userInputForm"
  ) as HTMLFormElement;

  const formData = new FormData(startGameForm);
  const userName = formData.get("nameInput") as string | null;
  const userTime = formData.get("timeSelect") as number | null;
  //cant send if the user hasn't inputted - perhaps to some alert
  if (!userName || !userTime) return;

  //make sure that each game starts with a clean slate of pieces

  whitePieces.splice(
    0,
    whitePieces.length,
    ..._.cloneDeep(whitePiecesTemplate)
  );
  blackPieces.splice(
    0,
    blackPieces.length,
    ..._.cloneDeep(blackPiecesTemplate)
  );
  whitePiecesTaken.pieceArray.length = 0;
  blackPiecesTaken.pieceArray.length = 0;
  legalDots.length = 0;

  socket.emit("user-info", { userName: userName, userTime: userTime });
};

export default sendUserInformation;
