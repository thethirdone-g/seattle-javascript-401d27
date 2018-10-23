'use strict';

// You want the Node-built-in modules which are known as first-party.

const net = require('net');
const EE = require('events'); // Capitalize because we're making a new instance of the event emitter.

// Internal files
const Client = require('./client.js');

// Environment
require('dotenv').config(); // Requiring that the computer looks in our .env file for the port.
const PORT = process.env.PORT || 3000;

// Making a new server
const server = net.createServer(); // Not relying on express.

// Setting up a pool to hold all of the current users
const pool = [];

// Setting up a connection event
server.on('connection', (socket) => {
  const client = new Client(socket);
  pool.push(client);
  client.socket.write('Welcome to George\'s Chat Room!\n');

  // Data refers to whenever someone in the chat room types a message.

  socket.on('data', (data) => {
    // console.log('This is the data', data); <-- Buffer
    // console.log('This is the data.toString()', data.toString());

    // Building out the first command @all which will send a message to everyone in the chat room.
    const command = data.toString().split(' ');
    console.log(command);

  });

});


// Making sure the server is listening to our PORT.
server.listen(PORT, () => console.log(`Listening on ${PORT}`));