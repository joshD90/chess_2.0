import { MyServer } from "../types/socketTypes";

const setupSendTick = (io: MyServer): void => {
  //we dont want to set up a new tick for every player that joins, just do this on the first one
  if (io.of("/").adapter.rooms.size > 1) return;

  setInterval(() => {
    io.emit("tick");
  }, 1000);
};

export default setupSendTick;
