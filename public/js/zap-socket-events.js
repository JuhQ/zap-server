'use strict';

socket.on('update playerlist', function (data) {
  updatePlayers();
});

socket.on('start game', function () {
  showJoinScreen(false);
  showGameScreen(true);
});

socket.on('cards dealed', function () {
  socket.emit('get collection', function (collection) {
    console.log(collection);
  });
});