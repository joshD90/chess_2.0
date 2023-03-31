import hideResetGame from "../../resetGame.ts/hideResetGame";
import sendRematch from "../../resetGame.ts/sendRematch";

const showEndBanner = (singlePlayer: boolean, endMessage: string) => {
  const endDiv = document.querySelector(".endDiv") as HTMLDivElement;
  const endHeader = document.querySelector("#endHeader") as HTMLHeadElement;
  const exitBtn = document.getElementById("endBannerExit") as HTMLButtonElement;
  const rematchBtn = document.querySelector(".rematchBtn") as HTMLButtonElement;
  const newGameBtn = document.querySelector(".newGameBtn") as HTMLButtonElement;

  endDiv?.classList.remove("hidden");
  endHeader.innerText = endMessage;
  //only add the event listeners once its visible for performance
  //these are removed in hideResetGame
  exitBtn.addEventListener("click", () => {
    hideResetGame(endDiv, exitBtn, rematchBtn, newGameBtn);
  });

  rematchBtn.addEventListener("click", () => {
    hideResetGame(endDiv, exitBtn, rematchBtn, newGameBtn);
    sendRematch();
  });
  newGameBtn.addEventListener("click", () => {
    hideResetGame(endDiv, exitBtn, rematchBtn, newGameBtn);
    sendRematch();
  });
};

export default showEndBanner;
