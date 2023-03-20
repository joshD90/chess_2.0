const setPieceValue = (type: string): number => {
  switch (type) {
    case "queen":
      return 9;
    case "rook":
      return 5;
    case "bishop":
      return 3.5;
    case "knight":
      return 3;
    default:
      return 1;
  }
};

export default setPieceValue;
