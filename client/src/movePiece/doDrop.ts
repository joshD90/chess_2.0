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

import checkPawnQueening from "./actionsOnPlacement/checkPawnQueening";
import setPawnQueening from "./actionsOnPlacement/setPawnQueening";
import setEnPassante from "./actionsOnPlacement/setEnPassant";
import takeEnPassante from "./actionsOnPlacement/takeEnPassante";
import deactivateEnPassante from "./actionsOnPlacement/deactivateEnPassante";

import determineStalemate from "./actionsOnPlacement/determineStalemate";

import determineCheckmate from "./actionsOnPlacement/determineCheckmate";
import determineDrawByInsufficientMaterial from "./actionsOnPlacement/determineDrawByInsufficientMaterial";
import addPieceToTaken from "./actionsOnPlacement/addPieceToTaken";
import getPieceByAN from "../utils/getPieceByAN";
import sendTurnInformation from "../socketActions/game/outgoing/sendTurnInformation";
import { Socket } from "socket.io-client";
import sendEnd from "../socketActions/game/outgoing/sendEndInformation";
import { opponent, Player, player } from "../player/player_class";

const doDrop = (
  squareToDrop: GridSquare,
  position: HypotheticalPosition,
  pieceToChange: PieceType,
  board: Board,
  canvas: HTMLCanvasElement,
  socket: Socket
) => {
  const opponentPieces =
    board.color === "white" ? position.black : position.white;

  //see what sort of legal move we are landing on and determine what we need to do
  const landingType = checkLandingOnLegalSquare(squareToDrop, legalDots);

  if (!landingType) {
    pieceToChange.deactivate();
    return;
  }
  //if we are landing on a legal square drop the piece and give it a new position
  //update our pieces new AN and Deactivate
  pieceToChange.deactivate();
  pieceToChange.an = squareToDrop?.an;
  //set enPassante if applicable
  setEnPassante(pieceToChange, squareToDrop);
  //then set first move as false
  pieceToChange.firstMove = false;

  if (landingType.moveType === "attack") {
    const pieceToAddToTaken = getPieceByAN(squareToDrop.an, opponentPieces);
    if (pieceToAddToTaken) addPieceToTaken(pieceToAddToTaken);
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

  //do our move operators, move this into a seperate function.
  setCheck(board, position, "white");
  setCheck(board, position, "black");
  if (
    determineCheckmate(
      position,
      opponentPieces[0].color as "white" | "black",
      board
    )
  )
    return sendEnd("checkmate", socket, player, opponent, pieceToChange.color);
  if (
    determineStalemate(
      position,
      opponentPieces[0].color as "white" | "black",
      board
    )
  )
    return sendEnd("stalemate", socket, player, opponent, pieceToChange.color);

  if (determineDrawByInsufficientMaterial(position))
    return sendEnd(
      "insufficient",
      socket,
      player,
      opponent,
      pieceToChange.color
    );

  legalDots.length = 0;
  //make sure that when the turn passes back over we  have a clean slate
  deactivateEnPassante(opponentPieces);

  if (!board.singlePlayer) return sendTurnInformation(socket);

  //flip the board
  flipBoard(board, canvas, position);
  //we need something like do end of turn business
  switchTurnsSingle(player, opponent, board);
};

const switchTurnsSingle = (player: Player, opponent: Player, board: Board) => {
  if (player.color === board.color) {
    player.setTurn(true);
    opponent.setTurn(false);
  } else {
    player.setTurn(false);
    opponent.setTurn(true);
  }
};

export default doDrop;
