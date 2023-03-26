const creatingRange = (type: string) => {
  if (type === "king") return 1;
  if (type === "pawn") return 1;
  if (type === "knight") return 1;
  return 8;
};

export default creatingRange;
