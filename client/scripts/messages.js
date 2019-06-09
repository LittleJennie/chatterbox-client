var Messages = {
    results: [], 

    // stored by object ID;
    renderedMessages: new Set(),

    serialize: function(text) {
        var messageObject = {};

        messageObject.text = text;
        messageObject.username = App.username;
        messageObject.roomname = RoomsView.getSelected();
        return messageObject;
    }

};