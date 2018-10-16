'use strict';

const greet = require ('../../lib/greet.js');

describe('Testing the greet module', () => {
  it('should say the word "hello" before the string that is passed in as a parameter', () => {
    expect(greet('world')).toBe('hello world');
  });

  it('should return null if a string is not passed in as a parameter', () => {
    expect(greet(4)).toBe(null);
  });
});

