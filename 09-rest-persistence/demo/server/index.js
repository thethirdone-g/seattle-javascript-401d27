'use strict';

require('dotenv').config();

// This will require the "app.js" file and immediately call its 'start' method, sending the port from our .env file.
require('./src/app.js').start(process.env.PORT);
