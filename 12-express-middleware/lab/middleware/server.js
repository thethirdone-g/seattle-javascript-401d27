'use strict'; // This is not needed while using Babel.

import express from 'express';

let app = express();

const logger = (req, res, next) => {
  console.log(`I'm in the logger function`);
  next();
};

app.get('/', (req, res) => {
  console.log('You are in the / route');
  res.send('Got it!');
});

app.listen(3000, () => console.log(`I'm listening on PORT 3000`));