export interface UserInfo {
  userName: string;
  userTime: number;
}

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
