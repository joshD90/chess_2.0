import { io } from "socket.io-client";
import handleSingleOrMultiInputChange from "./player/handleSingleOrMultiInputChange";
import returnToMenu from "./player/returnToMenu";

import sendUserInformation from "./socketActions/roomAllocation/outgoing/sendUserInformation";
import setUpErrorListeners from "./socketActions/setUpErrorListeners";
import setUpServerActions from "./socketActions/setUpServerActions";
import setUpSocketListeners from "./socketActions/setUpSocketListeners";

//create our server instance
// const socket = io("https://chess2.joshuadanceywebdev.ie", {
//   path: "/socket.io/",
// });

const socket = io("http://localhost:8802");

setUpServerActions(socket);
setUpErrorListeners(socket);
setUpSocketListeners(socket);

//handle our submit
const handleSubmit = (e: Event) => {
  e.preventDefault();
  sendUserInformation(socket);
};
//for the starting form
const userForm = document.querySelector(".userInputForm") as HTMLFormElement;
const singleOrMulti = document.getElementById(
  "singleOrMulti"
) as HTMLSelectElement;
const returnToMenuBtn = document.getElementById(
  "returnToMenu"
) as HTMLButtonElement;

userForm.addEventListener("submit", handleSubmit);
singleOrMulti.addEventListener("change", handleSingleOrMultiInputChange);
returnToMenuBtn.addEventListener("click", (e) => returnToMenu(e, socket));

//for the toggle bar information
const toggleInfo = document.querySelector(".toggleInfoDiv") as HTMLDivElement;
const toggleInfoPar = document.querySelector(
  ".toggleInfoPar"
) as HTMLParagraphElement;
toggleInfo.addEventListener("click", () => {
  if (toggleInfoPar.classList.contains("hidden")) {
    toggleInfoPar.classList.remove("hidden");
  } else {
    toggleInfoPar.classList.add("hidden");
  }
});
