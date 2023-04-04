import { Socket } from "socket.io-client";

const waitingSection = document.querySelector(".waitingSection") as HTMLElement;
const landingPage = document.querySelector(".landingDiv") as HTMLDivElement;
const waitingCancel = document.querySelector(
  "#cancelWait"
) as HTMLButtonElement;

const hideWaitingSection = (cancel: boolean, socket: Socket) => {
  waitingSection.classList.add("hidden");

  if (!cancel) return;
  landingPage.classList.remove("hidden");
  //remove event listener to avoid memory leak.  Can't pass anonymous callback to remove event listener
  const closure = () => {
    hideWaitingSection(true, socket);
  };
  waitingCancel.removeEventListener("click", closure);

  socket.emit("cancel-game");
};

export default hideWaitingSection;
