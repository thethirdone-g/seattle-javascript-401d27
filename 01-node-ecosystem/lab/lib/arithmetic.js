'use strict';

module.exports = exports = {
  add: (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a + b;
    } else {
      return null;
    }
  },
  sub: (a, b) => {
    if (typeof a === 'number' && typeof b === 'number') {
      return a - b;
    } else {
      return null;
    }
  },
};