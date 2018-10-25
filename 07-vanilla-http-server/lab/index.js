'use strict';

// 3rd Party Library
const dotenv = require('dotenv').config();

// Local Library
const server = require('./src/app.js');

// Fire up teh server, on the port that we pulled out of our .env file. Note : there is NO default port given!
server.start(process.env.PORT, () => console.log(`Server is up and running on ${process.env.PORT}`))