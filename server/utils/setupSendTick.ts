import { MyServer } from "../types/socketTypes";

const setupSendTick = (io: MyServer) => {
  setInterval(() => {
    io.emit("tick");
  }, 1000);
};

export default setupSendTick;
