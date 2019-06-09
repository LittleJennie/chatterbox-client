var Rooms = {
  roomList: new Set(),

  renderedRooms: new Set(),

  add: function () {
    var addRoomMsg = prompt("Please enter room name: ", "New Room");
    if (addRoomMsg !== null) {
      Parse.create({roomname: addRoomMsg});
    }
  }

};