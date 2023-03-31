import {
  blackPiecesTaken,
  PiecesTaken,
  whitePiecesTaken,
} from "../../board/sideCanvas/piecesTaken_class";
import blackPieces from "../../pieces/blackPieces";
import { Piece } from "../../pieces/piece_class";
import whitePieces from "../../pieces/whitePieces";
import { DeserialisedPiece, IterableType } from "../../types/pieceTypes";
import { TurnObject } from "../../types/playerTypes";

import _ from "lodash";

const refreshPiecesFromTurn = (turnObj: TurnObject) => {
  const newWhitePieces = reinstantiatePieces(turnObj.pieces.white);
  const newBlackPieces = reinstantiatePieces(turnObj.pieces.black);
  //update our pieces from what the other player has passed over
  whitePieces.splice(0, whitePieces.length, ...newWhitePieces);
  blackPieces.splice(0, blackPieces.length, ...newBlackPieces);
  //reset our pieces off board
  updatePiecesTaken(whitePiecesTaken, turnObj);
  updatePiecesTaken(blackPiecesTaken, turnObj);

  whitePiecesTaken.setPieceArrayCoords();
  blackPiecesTaken.setPieceArrayCoords();
};
//instantiate and update piece - cant transmit data classes over socket.io as the methods get lost in the serialisation and deserialisation.  Must reinstantiate + change relevant properites
const reinstantiatePieces = (pieces: DeserialisedPiece[]): Piece[] => {
  const newPieces = pieces.map((piece) => {
    const newPiece = new Piece(piece.color, piece.an, piece.type);
    newPiece.firstMove = piece.firstMove;
    newPiece.inCheck = piece.inCheck;
    newPiece.isEnPassante = piece.isEnPassante;
    return newPiece;
  });

  return newPieces;
};

//sub in the updated array of taken pieces.  Using iterable type so that we can dynamically set keys in our turn obj
const updatePiecesTaken = (piecesTaken: PiecesTaken, turnObj: IterableType) => {
  piecesTaken.pieceArray.splice(
    0,
    piecesTaken.pieceArray.length,
    ...turnObj.piecesTaken[piecesTaken.color]
  );
  piecesTaken.setPieceArrayCoords();
};

export default refreshPiecesFromTurn;
