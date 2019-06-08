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
    console.dir(messageView);

    this.$chats.append(messageView);
    $('.username').on('click', function() {
      Friends.toggleFriends(this.innerHTML);
      MessageView.toggleFriendsClass(messageView);
    });
  },

  render: function() {
    console.dir(Messages.results);
    for (var i = 0; i < Messages['results'].length; i++) {
      var room = Messages.results[i].roomname;
      Rooms.roomList.add(room);
      // if ($('rooms').get('select') === room) {
        this.renderMessage(Messages.results[i]);
      // }
    }
  },

};

