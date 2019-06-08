var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.render();
  },

  renderRoom: function(room) {

    this.$select.append(`<option>${room}</option>`);

  },

  render: function() {
    var self = this;
    Rooms.roomList.forEach(function(room) {
      self.renderRoom(room);
    })
  }

  

};
