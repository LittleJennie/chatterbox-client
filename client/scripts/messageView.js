var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username" onclick="MessageView.toggleFriendsClass('<%-username%>')"><%-username%></div>
        <div class="text"><%=text%></div>
      </div>
    `),



  /*
    & -> &amp;
    < -> &lt;
    > -> &gt;
    " -> &#034;
    ' -> &#039;
  */
  sanitize: function(text = '') {
    return text.replace(/&/g, '&amp').replace(/</g, '&lt').replace(/>/g, '&gt').replace(/"/g, '&#034').replace(/'/g, '&#039');
  }, 

  toggleFriendsClass: function(username) {

    Friends.toggleFriends(username);
    this.formatCSS(username);
    
  },

  formatCSS: function (username) {
    var $chatDiv = $(`div:contains(${username})`);

    $chatDiv = $chatDiv.filter(function (index) {
      return $( '.username', this ).prop('innerHTML') === username;
    });

    if (Friends.myFriends.has(username)) {
      $chatDiv.each ((index) => {
        $($chatDiv[index]).addClass('friend');
      });    
    } else {
      $chatDiv.each ((index) => {
        $($chatDiv[index]).removeClass('friend');
      }); 
    }
  }

};
