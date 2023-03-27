import { MyServer } from "../../types/socketTypes";
import { Socket } from "socket.io";

import { UserInfo } from "../../types/infoTypes";
import joinSpareRoom from "../assignRooms/joinSpareRoom";

const setUpClientListeners = (socket: Socket, io: MyServer) => {
  socket.on("user-info", (info: UserInfo) => {
    const { userName, userTime } = info;
    socket.data.name = userName;
    socket.data.time = userTime;
    joinSpareRoom(socket, io);
  });
};

export default setUpClientListeners;
