import { Board } from "../board/board_class";
import { GridSquare } from "../types/boardTypes";
import { HypotheticalPosition } from "../types/legalMoveTypes";
import { PieceType } from "../types/pieceTypes";

import flipBoard from "./actionsOnPlacement/flipBoard";
import removePieceByAn from "./actionsOnPlacement/removePieceByAn";
import setCheck from "./actionsOnPlacement/setCheck";
import checkLandingOnLegalSquare from "./checkLandingOnLegalSquare";
import { legalDots } from "../legalMoves/pieceDirection/legalDots";
import setCastle from "./actionsOnPlacement/setCastle";
import promotePawn from "./actionsOnPlacement/promotePawn";
import checkPawnQueening from "./actionsOnPlacement/checkPawnQueening";
import setPawnQueening from "./actionsOnPlacement/setPawnQueening";
import setEnPassante from "./actionsOnPlacement/setEnPassant";
import takeEnPassante from "./actionsOnPlacement/takeEnPassante";
import deactivateEnPassante from "./actionsOnPlacement/deactivateEnPassante";

const doDrop = (
  squareToDrop: GridSquare,
  position: HypotheticalPosition,
  pieceToChange: PieceType,
  board: Board,
  canvas: HTMLCanvasElement
) => {
  const opponentPieces =
    board.color === "white" ? position.black : position.white;

  //see what sort of legal move we are landing on and determine what we need to do
  const landingType = checkLandingOnLegalSquare(squareToDrop, legalDots);

  if (!landingType) {
    pieceToChange.deactivate();
    return;
  }

  //update our pieces new AN and Deactivate
  pieceToChange.deactivate();
  pieceToChange.an = squareToDrop?.an;
  //set enPassante if applicable
  setEnPassante(pieceToChange, squareToDrop);
  //then set first move as false
  pieceToChange.firstMove = false;

  if (landingType.moveType === "attack") {
    removePieceByAn(squareToDrop.an, opponentPieces);
  }
  if (landingType.moveType === "enPassante") takeEnPassante(opponentPieces);
  if (landingType.moveType === "castle")
    setCastle(position, pieceToChange, squareToDrop);
  //if the pawn is queening exit this function before passing over the turn and once we do our queening then carry on
  if (checkPawnQueening(pieceToChange, squareToDrop))
    return setPawnQueening(
      pieceToChange,
      board,
      squareToDrop,
      landingType,
      opponentPieces
    );

  legalDots.length = 0;
  //make sure that when the turn passes back over we  have a clean slate
  deactivateEnPassante(opponentPieces);
  //do our move operators, move this into a seperate function.
  setCheck(board, position, "white");
  setCheck(board, position, "black");
  //flip the board
  flipBoard(board, canvas, position);
};

export default doDrop;
