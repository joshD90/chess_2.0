//AN stands for algebraic notation
//ANNum is for when we have converted the letter to a number for ease of use

export type AN = {
  col: string;
  row: number;
};

export type Coord = {
  x: number;
  y: number;
};
export type ANNum = {
  col: number;
  row: number;
};

export type GridSquare = {
  an: AN;
  anNum: ANNum;
  coord: Coord;
};

export type EndBannerElements = {
  bannerDiv: HTMLDivElement;
  exit: HTMLButtonElement;
  rematch: HTMLButtonElement;
  newGame: HTMLButtonElement;
};
