import { NameObject } from "../../types/infoTypes";
import { MyServer, RoomMap } from "../../types/socketTypes";

const getSocketDataObject = (
  roomMap: RoomMap,
  roomName: string,
  io: MyServer,
  dataKey: string
): NameObject => {
  const thisRoom = roomMap.get(roomName);

  const dataObject: NameObject = {};
  //for all of the sockets in the room assign the key dynamically and assign name based on that id
  thisRoom.forEach((player) => {
    dataObject[player] = io.sockets.sockets
      .get(player)
      .data[dataKey]?.toString();
  });
  return dataObject;
};

export default getSocketDataObject;
