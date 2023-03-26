import { HypotheticalPosition, LegalMove } from "../../types/legalMoveTypes";
import { PieceType } from "../../types/pieceTypes";
import { cols } from "../../board/defineGrid";
import { Board } from "../../board/board_class";

//BREAK ME UP INTO SMALLER FUNCTIONS LATER PLEASE, CAN KEEP THEM IN THIS MODULE THOUGH
const addEnPassante = (
  selectedPiece: PieceType,
  position: HypotheticalPosition,
  moveArray: LegalMove[],
  board: Board
): void => {
  //don't continue if the criteria has not been met
  if (selectedPiece.type !== "pawn") return;
  if (selectedPiece.color === "white" && selectedPiece.an.row !== 4) return;
  if (selectedPiece.color === "black" && selectedPiece.an.row !== 3) return;

  const opponentColor =
    selectedPiece.color === "white" ? position.black : position.white;

  //if our opponent color does not contain any enpassante viable pieces return
  const opponentPawnInEnPassante = opponentColor.find(
    (piece) => piece.isEnPassante
  );
  if (!opponentPawnInEnPassante) return;
  //if the pawn is in an adjacent column then we push the square behind them
  const indexOfSelectedPieceCol = cols.indexOf(selectedPiece.an.col);
  if (indexOfSelectedPieceCol === -1)
    throw Error(
      "There was an issue in identifying the column of your selected piece"
    );
  //check the columns to the left or right are the same as the enPassantePawn
  if (
    cols[indexOfSelectedPieceCol + 1] === opponentPawnInEnPassante.an.col ||
    cols[indexOfSelectedPieceCol - 1] === opponentPawnInEnPassante.an.col
  ) {
    //if we are white then the row to be attacked is one column up and opposite for black
    const rowAdjuster = selectedPiece.color === "white" ? 1 : -1;
    const enPassanteCol = opponentPawnInEnPassante.an.col;
    const enPassanteRow = selectedPiece.an.row + rowAdjuster;
    //find the square on the grid so we can meet the legal move requirements of anNum and coords
    const newGridSquare = board.grid.find(
      (square) =>
        square.an.col === enPassanteCol && square.an.row === enPassanteRow
    );

    if (!newGridSquare) throw Error("could not find this square on the grid");
    const enPassanteMove: LegalMove = {
      square: newGridSquare,
      moveType: "enPassante",
    };
    moveArray.push(enPassanteMove);
  }
};

export default addEnPassante;
