var MessagesView = {

  $chats: $('#chats'),
  $username: $('.username'),

  initialize: function() {
    // get room name
    // 

    this.render();
  },

  renderMessage: function (message) {
    message.username = MessageView.sanitize(message.username);
    message.text = MessageView.sanitize(message.text);

    var messageView = $(MessageView.render({username: message.username, text: message.text}));

    this.$chats.prepend(messageView);
    MessageView.formatCSS(message.username);
    Messages.renderedMessages.add(message.objectId);
  },

  render: function() {
    console.dir(Messages.results);
    for (var i = Messages['results'].length - 1; i >= 0; i--) {
      var message = Messages.results[i];
      var room = message.roomname === undefined ? 'lobby' : message.roomname;
      Rooms.roomList.add(room);

      console.log('RoomsView.getSelected()', RoomsView.getSelected());

      if (!Messages.renderedMessages.has(message.objectId) &&
          room === RoomsView.getSelected()) {
        this.renderMessage(Messages.results[i]);
      }
    }
  },

  clearMessages: function () {
    this.$chats.empty();
    Messages.renderedMessages = new Set();
  }

};

