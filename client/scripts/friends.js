var Friends = {
    myFriends: new Set(),

    toggleFriends: function (username) {
        if (this.myFriends.has(username)) {
            this.myFriends.delete(username)
        } else {
            this.myFriends.add(username);
        }
    }

};