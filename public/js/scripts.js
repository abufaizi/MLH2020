$('#open-signup-button').click(function() {
  $('#signup-modal').addClass('is-active');
});

$('#open-login-button').click(function() {
  $('#login-modal').addClass('is-active');
});

$('#signup-submit-button').click(function() {
  $('#signup-modal').removeClass('is-active');
});

$('#close-signup-form').click(function() {
  $('#signup-modal').removeClass('is-active');
});

$('#login-submit-button').click(function() {
  $('#login-modal').removeClass('is-active');
});

$('#close-login-form').click(function() {
  $('#login-modal').removeClass('is-active');
});

$(function() {
  let socket = io('/my-namespace');
  $('#chat-form').submit(function(e) {
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#chat-message-input').val());
    $('#chat-message-input').val('');
    return false;
  });
});
