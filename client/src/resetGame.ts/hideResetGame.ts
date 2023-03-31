import { Socket } from "socket.io-client";
import { EndBannerElements } from "../types/boardTypes";
import sendNewGame from "./sendNewGame";
import sendRematch from "./sendRematch";

const hideResetGame = (
  endBannerElements: EndBannerElements,
  socket: Socket
) => {
  const exitClosure = () => {
    hideResetGame(endBannerElements, socket);
  };
  const rematchClosure = () => {
    hideResetGame(endBannerElements, socket);
    sendRematch();
  };
  const newGameClosure = () => {
    hideResetGame(endBannerElements, socket);
    sendNewGame(socket);
  };
  //we dont want to keep on adding more and more listeners and keep these listeners on while we dont need them
  endBannerElements.exit.removeEventListener("click", exitClosure);
  endBannerElements.rematch.removeEventListener("click", rematchClosure);
  endBannerElements.newGame.removeEventListener("click", newGameClosure);

  endBannerElements.bannerDiv.classList.add("hidden");
};

export default hideResetGame;
