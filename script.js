$(document).ready(function() {
  run();
});

function run() {
  pressEnterHandler();
  clickSendHandler();
  $('#new-message-button').click(function() {
    createMessage();
  });
}

function pressEnterHandler() {
  $('textarea').keypress(function(e) {
    if(e.which == 13) {
      createMessage();
    }
  });
}

function clickSendHandler() {
  $('#new-message-button').click(createMessage());
}

function createMessage() {
  var msg = $('textarea').val();
  $('ol#conversation').append('<li class="message"><a class="delete" href="#">Delete</a><h3 class="author">Me</h3><p class="message-body">' + msg + '</p><span class="timestamp">01:12</span></li>');
  deleteMessageHandler();
  $('textarea').val('');
}

function deleteMessageHandler() {
  $('a.delete').click(function(e) {
    e.preventDefault();
    deleteMessage(e);
  });
}

function deleteMessage(e) {
  $(e.target).parent().remove();
}
