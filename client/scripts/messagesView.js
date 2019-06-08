var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // get room name
    // 
    
      console.dir(MessageView.render);
    this.render();
    console.log('this is after render was called')
  },

  renderMessage: function (message) {
    message.username = MessageView.sanitize(message.username);
    message.text = MessageView.sanitize(message.text);
    this.$chats.append(MessageView.render({username: message.username, text: message.text}));
  },

  render: function() {
    console.dir(Messages.results);
    for (var i = 0; i < Messages['results'].length; i++) {
      this.renderMessage(Messages.results[i]);
    }
  },

};