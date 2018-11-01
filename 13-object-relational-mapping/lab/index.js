'use strict';

require('dotenv').config();

// Helping us by bringing our code to ES6.
require('babel-register');

// Starting up the "db" server.
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
};
mongoose.connect(process.env.MONGODB_URI, options);

// Starting up the web server.
