import { Socket } from "socket.io-client";
import hideResetGame from "../banners/hideEndBanner";
import sendNewGame from "../outgoing/sendNewGame";
import sendRematch from "../outgoing/sendRematch";
import { EndBannerElements } from "../../../types/boardTypes";

const showEndBanner = (
  singlePlayer: boolean,
  endMessage: string,
  socket: Socket
) => {
  const endDiv = document.querySelector(".endDiv") as HTMLDivElement;
  const endHeader = document.querySelector("#endHeader") as HTMLHeadElement;
  const exitBtn = document.getElementById("endBannerExit") as HTMLButtonElement;
  const rematchBtn = document.querySelector(".rematchBtn") as HTMLButtonElement;
  const newGameBtn = document.querySelector(".newGameBtn") as HTMLButtonElement;

  endDiv?.classList.remove("hidden");
  endHeader.innerText = endMessage;

  const endBannerElements: EndBannerElements = {
    bannerDiv: endDiv,
    exit: exitBtn,
    rematch: rematchBtn,
    newGame: newGameBtn,
  };
  //only add the event listeners once its visible for performance
  //these are removed in hideResetGame
  exitBtn.addEventListener("click", () => {
    hideResetGame(endBannerElements, socket);
  });

  rematchBtn.addEventListener("click", () => {
    hideResetGame(endBannerElements, socket);
    sendRematch(socket);
  });
  newGameBtn.addEventListener("click", () => {
    hideResetGame(endBannerElements, socket);
    sendNewGame(socket);
  });
};

export default showEndBanner;
