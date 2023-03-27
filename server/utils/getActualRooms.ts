import { MyServer } from "../types/socketTypes";

const getActualRooms = (io: MyServer) => {
  const rooms = io.of("/").adapter.rooms;
  //we just want copy of a list ultimately
  const roomsArray = [...rooms.keys()];
  //filter any rooms that contain a user that is of the same value as the name of the room
  const actualRooms = roomsArray.filter((roomName) => {
    //refer back to the original set
    const thisRoom = rooms.get(roomName);

    if (thisRoom.has(roomName)) return false;

    return true;
  });

  return actualRooms;
};

export default getActualRooms;
