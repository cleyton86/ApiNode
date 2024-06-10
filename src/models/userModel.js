const db = require('../config/db');
const bcrypt = require('bcryptjs');

const User = {
  create: (userData, callback) => {
    bcrypt.hash(userData.password, 10, (err, hash) => {
      if (err) return callback(err);
      db.query('INSERT INTO users (username, password) VALUES (?, ?)', [userData.username, hash], callback);
    });
  },

  findByUsername: (username, callback) => {
    db.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
      if (err) return callback(err);
      callback(null, results[0]);
    });
  }
};

module.exports = User;
