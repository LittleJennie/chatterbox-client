var MessageView = {

  render: _.template('\
      <div class="chat">\
        <div class="username"><%=username%></div>\
        <div class="text"><%=text%></div>\
      </div>\
    '),



  /*
    & -> &amp;
    < -> &lt;
    > -> &gt;
    " -> &#034;
    ' -> &#039;
  */
  sanitize: function(text) {

    return text.replace(/&/g, '&amp').replace(/</g, '&lt').replace(/>/g, '&gt').replace(/"/g, '&#034').replace(/'/g, '&#039');
  }

};