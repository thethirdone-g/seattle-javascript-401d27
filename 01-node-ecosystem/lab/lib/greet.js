'use strict';
// This module should export a single function.

// The greet function should have a single parameter (arity of one) that should expect a string as it's input
// The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
// The greet function should return null if the input is not a string

module.exports = exports = (str) => {
// ** module.exports = (str) => { ** is JB's preferred syntax.
  if (typeof(str) === 'string') {
    return `hello ${str}`;
  } else {
    return null;
  }
};

// ** const greet = module.exports = {}; ** Allie's preferred syntax.