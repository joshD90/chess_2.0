export type TimeInMinutes = {
  mins: number;
  secs: string;
};

export type ColorObject = {
  white: string;
  black: string;
};

export type NameObject = {
  [key: string]: string;
};

export type StartGameObject = {
  colors: ColorObject;
  names: NameObject;
};
