import { Socket } from "socket.io-client";
import hideWaitingSection from "../incoming/hideWaitingSection";

const waitingBanner = document.querySelector(".waitingSection") as HTMLElement;
const waitingCancel = document.querySelector(
  "#cancelWait"
) as HTMLButtonElement;

const showWaitingBanner = (socket: Socket) => {
  waitingBanner.classList.remove("hidden");
  waitingCancel.addEventListener("click", () =>
    hideWaitingSection(true, socket)
  );
};

export default showWaitingBanner;
