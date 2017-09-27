var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.emit('createMessage', {
  from: 'John Power',
  text: 'Yup that works for me'
});

socket.on('newMessage', function(message) {
  console.log('New Message', message);
})
