const createNewRoomName = (actualRooms: string[]) => {
  const roomNums = actualRooms.map((room) => parseInt(room.slice(4, 5)));
  if (roomNums.length === 0) return "room1";
  const sortedRooms = roomNums.sort((a, b) => a - b);

  //we run a loop 1 beyond the highest room number name.  If any of those roomnames are not in use, join that room
  for (let i = 1; 1 < sortedRooms[sortedRooms.length - 1] + 2; i++) {
    if (!sortedRooms.some((roomNum) => roomNum === i)) return `room${i}`;
  }
};

export default createNewRoomName;
