import { Socket } from "socket.io-client";

const sendUserInformation = (socket: Socket) => {
  //get our form information
  const startGameForm = document.querySelector(
    ".userInputForm"
  ) as HTMLFormElement;

  const formData = new FormData(startGameForm);
  const userName = formData.get("nameInput") as string | null;
  const userTime = formData.get("timeSelect") as number | null;
  //cant send if the user hasn't inputted - perhaps to some alert
  if (!userName || !userTime) return;

  socket.emit("user-info", { userName: userName, userTime: userTime });
};

export default sendUserInformation;
