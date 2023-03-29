import { io } from "socket.io-client";

import sendUserInformation from "./socketActions/outgoing/sendUserInformation";
import setUpErrorListeners from "./socketActions/setUpErrorListeners";
import setUpServerActions from "./socketActions/setUpServerActions";
import setUpSocketListeners from "./socketActions/incoming/setUpSocketListeners";

//create our server instance
const socket = io("http://localhost:5000");

setUpServerActions(socket);
setUpErrorListeners(socket);
setUpSocketListeners(socket);

//handle our submit
const handleSubmit = (e: Event) => {
  e.preventDefault();
  sendUserInformation(e, socket);
};

const userForm = document.querySelector(".userInputForm") as HTMLFormElement;

userForm.addEventListener("submit", handleSubmit);
