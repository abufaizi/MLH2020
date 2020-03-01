let socket = io();

socket.on('connect', function() {
  console.log('connected');
});

socket.on('chat message', function(msg) {
    console.log('c', msg);
    let li = $('<li></li>');
    li.text('ababab');

    $('#messages-list').append(li);
});

$(function() {
  var socket = io();
  $('#chat-form').submit(function(e) {
    e.preventDefault(); // prevents page reloading
    socket.emit('chat message', $('#chat-message-input').val());
    $('#chat-message-input').val('');
    return false;
  });

  socket.on('chat message', function(msg) {
    $('#messages-list').append($('<li>').text(msg));
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});
