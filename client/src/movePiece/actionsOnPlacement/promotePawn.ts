import { Socket } from "socket.io-client";
import { board } from "../../board/board_class";
import { canvas } from "../../board/canvasContext";
import { PieceOffBoard } from "../../pieces/pieceOffBoard_class";
import { Piece } from "../../pieces/piece_class";
import { opponent, player } from "../../player/player_class";
import sendEnd from "../../socketActions/game/outgoing/sendEndInformation";
import sendTurnInformation from "../../socketActions/game/outgoing/sendTurnInformation";
import { HypotheticalPosition } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import determineCheckmate from "./determineNoLegalMoves";
import flipBoard from "./flipBoard";
import setCheck from "./setCheck";

const promotePawn = (
  pieceChanging: PieceType,
  position: HypotheticalPosition,
  promotionPiece: PieceOffBoard,
  socket: Socket
) => {
  //create our new piece
  const promotedPiece = new Piece(
    pieceChanging.color,
    pieceChanging.an,
    promotionPiece.type
  );

  //remove our pawn from the piece array and add in promoted piece
  const indexOfPawn =
    position[pieceChanging.color as "black" | "white"].indexOf(pieceChanging);

  position[pieceChanging.color as "black" | "white"].splice(
    indexOfPawn,
    1,
    promotedPiece
  );

  //reset the board to non queening state
  board.queeningSelection = false;

  //see whether this promotion has caused check
  const opponentColor = promotedPiece.color === "white" ? "black" : "white";
  if (determineCheckmate(position, opponentColor, board))
    sendEnd("checkmate", socket, player, opponent);

  setCheck(board, position, opponentColor);
  //send the turn for multiplayer
  if (!board.singlePlayer) return sendTurnInformation(socket);
  //flip board if single player
  if (board.singlePlayer) flipBoard(board, canvas, position);
};

export default promotePawn;
