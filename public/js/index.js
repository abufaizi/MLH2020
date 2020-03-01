let socket = io();

socket.on('connect', function() {
  console.log('connected');
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
  let li = $('<li></li>');
  li.text(`${message.from} : ${message.text}`);

  $('#messages-list').append(li);
});

$('#chat-form').on('submit', function(e) {
  e.preventDefault();

  let messageTextbox = $('#chat-message-input');

  socket.emit(
    'createMessage',
    {
      from: 'User',
      text: messageTextbox.val(),
    },
    function() {
      messageTextbox.val('');
    },
  );
});
