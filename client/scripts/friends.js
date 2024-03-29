var Friends = {
  myFriends: new Set(),
  curFriend: '',

  toggleFriends: function (username) {
    if (this.myFriends.has(username)) {
      this.myFriends.delete(username);
    } else {
      this.myFriends.add(username);
    }
  },

  toggleStatus: function (username) {
    console.log('Friends.toggleStatus arguments', arguments);
    this.toggleFriends(username);
  },

};