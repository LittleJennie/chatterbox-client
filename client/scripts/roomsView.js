var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.render();
  },

  renderRoom: function(room) {
    var roomNode = $(`<option>${room}</option>`);
    this.$select.append(roomNode);
    Rooms.renderedRooms.add(room);

  },

  render: function() {
    var self = this;
    // check if all rooms rendered
    // render only unrendered rooms
    Rooms.roomList.forEach(function(room) {
      if (!Rooms.renderedRooms.has(room) ) {
        self.renderRoom(room);
      }
    })
  },

  getSelected: function() {
    var index = this.$select.prop('selectedIndex');
    if (index === -1) {
      return '';
    }
    return this.$select.prop(index).text;
  },

  roomClickListener: function () {
    MessagesView.clearMessages();
    MessagesView.render();
  }


};
