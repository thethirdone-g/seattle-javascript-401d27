'use strict';

const uuid = require('uuid/v4');

class User {
  constructor(socket) {
    let id = uuid(); // Assigning a random number for the ID
    this.id = id;
    this.nickname = `user_${id}`;
    this.socket = socket;
  }
}

module.exports = User;