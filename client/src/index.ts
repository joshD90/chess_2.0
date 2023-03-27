import { io, Socket } from "socket.io-client";

import { board } from "./board/board_class";

import drawAll from "./draw/drawAll";
import initialiseGame from "./player/initialiseGame";
import sendUserInformation from "./socketActions/sendUserInformation";
import setUpErrorListeners from "./socketActions/setUpErrorListeners";
import setUpServerActions from "./socketActions/setUpServerActions";
import setUpSocketListeners from "./socketActions/setUpSocketListeners";

//create our server instance
const socket = io("http://localhost:5000");

setUpServerActions(socket);
setUpErrorListeners(socket);
setUpSocketListeners(socket);

//declare our event loop
const eventLoop = () => {
  requestAnimationFrame(() => {
    drawAll(board);
    eventLoop();
  });
};
//handle our submit
const handleSubmit = (e: Event) => {
  e.preventDefault();
  console.log("Doing anything");
  //grab our user input elements
  const coverDiv = document.querySelector(".landingDiv") as HTMLDivElement;
  sendUserInformation(e, socket);
  coverDiv.style.visibility = "hidden";
};

const userForm = document.querySelector(".userInputForm") as HTMLFormElement;

userForm.addEventListener("submit", handleSubmit);

//starts our game
const startGame = () => {
  initialiseGame("black", 545, "Josh", "James");
  eventLoop();
};
