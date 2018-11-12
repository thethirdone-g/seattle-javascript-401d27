require('dotenv').config();
require('babel-register');

// This will require our "app.js" file and immediately call its 'start' method, sending the port from .env
require('./src/app.js').start(process.env.PORT);