import sendNewGame from "./sendNewGame";
import sendRematch from "./sendRematch";

const hideResetGame = (
  endDiv: HTMLDivElement,
  exitBtn: HTMLButtonElement,
  rematchBtn: HTMLButtonElement,
  newGameBtn: HTMLButtonElement
) => {
  const exitClosure = () => {
    hideResetGame(endDiv, exitBtn, rematchBtn, newGameBtn);
  };
  const rematchClosure = () => {
    hideResetGame(endDiv, exitBtn, rematchBtn, newGameBtn);
    sendRematch();
  };
  const newGameClosure = () => {
    hideResetGame(endDiv, exitBtn, rematchBtn, newGameBtn);
    sendNewGame();
  };
  //we dont want to keep on adding more and more listeners and keep these listeners on while we dont need them
  exitBtn.removeEventListener("click", exitClosure);
  rematchBtn.removeEventListener("click", rematchClosure);
  newGameBtn.removeEventListener("click", newGameClosure);

  endDiv.classList.add("hidden");
};

export default hideResetGame;
