import { Socket } from "socket.io-client";
import initialiseGame from "../../../player/initialiseGame";
import showWaitingBanner from "../banners/showWaitingBanner";

const sendUserInformation = (socket: Socket) => {
  //get our form information
  const startGameForm = document.querySelector(
    ".userInputForm"
  ) as HTMLFormElement;

  const formData = new FormData(startGameForm);
  const userName = formData.get("nameInput") as string | null;
  const userTime = formData.get("timeSelect") as number | null;
  const singleOrMulti = formData.get("singleOrMulti") as
    | "single"
    | "multi"
    | null;
  //cant send if the user hasn't inputted - perhaps to some alert

  if (!userTime || !singleOrMulti) return;
  if (!userName && singleOrMulti === "multi") return;

  if (singleOrMulti === "single") {
    initialiseGame("white", userTime, "Player 1", "Player 2", socket, true);
    const landingDiv = document.querySelector(".landingDiv") as HTMLDivElement;
    landingDiv.classList.add("hidden");
    return;
  }

  socket.emit("user-info", { userName: userName, userTime: userTime });

  showWaitingBanner(socket);
};

export default sendUserInformation;
