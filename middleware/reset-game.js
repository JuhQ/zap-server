const db = require('../db');
const Game = require('../models/game');
const Player = require('../models/player');

module.exports = () => new Promise((resolve, reject) => {
  db.flush((error) => {
    if (error !== undefined) {
      reject();
    } else {
      resolve();
    }
  });
})
  .then(
    () => Game.setStatus(Game.GAME_STATUS_OFF),
    () => new Error('Flushing database in game start failed.'),
  )
  .then(
    () => Player.deleteAll(),
    error => error,
  )
  .catch((error) => { console.log(error); });
