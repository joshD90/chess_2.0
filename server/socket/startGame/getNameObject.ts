import { NameObject } from "../../types/infoTypes";
import { MyServer, RoomMap } from "../../types/socketTypes";

const getNameObject = (
  roomMap: RoomMap,
  roomName: string,
  io: MyServer
): NameObject => {
  const thisRoom = roomMap.get(roomName);

  const nameObject: NameObject = {};
  //for all of the sockets in the room assign the key dynamically and assign name based on that id
  thisRoom.forEach(
    (player) => (nameObject[player] = io.sockets.sockets.get(player).data.name)
  );
  return nameObject;
};

export default getNameObject;
