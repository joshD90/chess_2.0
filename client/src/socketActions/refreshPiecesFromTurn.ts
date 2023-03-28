import {
  blackPiecesTaken,
  PiecesTaken,
  whitePiecesTaken,
} from "../board/sideCanvas/piecesTaken_class";
import blackPieces from "../pieces/blackPieces";
import whitePieces from "../pieces/whitePieces";
import { IterableType } from "../types/pieceTypes";
import { TurnObject } from "../types/playerTypes";

const refreshPiecesFromTurn = (turnObj: TurnObject) => {
  console.log(turnObj.pieces.white, "on the other side");
  //update our pieces from what the other player has passed over
  whitePieces.length = 0;
  whitePieces.push(...turnObj.pieces.white);
  console.log(whitePieces, "whitePeices after");
  blackPieces.splice(0, blackPieces.length, ...turnObj.pieces.black);
  //reset our pieces off board
  updatePiecesTaken(whitePiecesTaken, turnObj);
  updatePiecesTaken(blackPiecesTaken, turnObj);
  console.log(whitePiecesTaken.color);
};

const updatePiecesTaken = (
  piecesTaken: IterableType,
  turnObj: IterableType
) => {
  console.log(turnObj);
  //so the format should be turnObject.piecesTaken.black or white depending on whether it is white or black
  const keyArray = Object.keys(piecesTaken);
  keyArray.forEach((key) => {
    if (key === "pieceArray") {
      piecesTaken.pieceArray.splice(
        0,
        piecesTaken.pieceArray.length,
        ...turnObj.piecesTaken[piecesTaken.color].pieceArray
      );
    } else {
      piecesTaken[key] = turnObj[key];
    }
  });
};

export default refreshPiecesFromTurn;
