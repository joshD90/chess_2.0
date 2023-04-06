import { EndBannerElements } from "../../../types/boardTypes";

const endDiv = document.querySelector(".endDiv") as HTMLDivElement;
const endHeader = document.querySelector("#endHeader") as HTMLHeadElement;
const exitBtn = document.getElementById("endBannerExit") as HTMLButtonElement;
const rematchBtn = document.querySelector(".rematchBtn") as HTMLButtonElement;
const newGameBtn = document.querySelector(".newGameBtn") as HTMLButtonElement;

export const endBannerElements: EndBannerElements = {
  bannerDiv: endDiv,
  exit: exitBtn,
  rematch: rematchBtn,
  newGame: newGameBtn,
  header: endHeader,
};
