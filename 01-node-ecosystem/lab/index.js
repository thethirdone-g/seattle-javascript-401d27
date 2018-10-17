'use strict';

// Pull in the 'greet' module and the 'arithmetic' module.
const greet = require('./lib/greet.js');
const arithmetic = require('./lib/arithmetic.js');

// Call the 'greet' function with 'world' as parameter. 'hello world' should be returned.
console.log(greet('world'));

// Call the 'greet' function with a number as a parameter. Null should be returned.
console.log(greet(4));

// Call the 'arithmetic' function with numbers as parameters. They should add and subtract.
console.log(arithmetic(15, 5));

// Call the 'arithmetic' function with strings as parameters. Null should be returned.
console.log(arithmetic('George', 'Miguel'));

// I imported the node modules which are just functions themselves.
