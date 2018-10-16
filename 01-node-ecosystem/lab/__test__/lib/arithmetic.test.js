'use strict';

const arithmetic = require('../../lib/arithmetic.js');

describe('Testing the arithmetic module', () => {
  it('should add the two numbers passed in as parameters and subtract them from right to left', () => {
    expect(arithmetic(15, 5)).toEqual([20, 10]);
  });

  it('should return null if numbers are not passed in as parameters', () => {
    expect(arithmetic('George', 'Miguel')).toBe(null);
  });
});

describe('Testing the arithmetic module', () => {
    it('should add the two numbers passed in as parameters', () => {
        const expected = 20;
        const actual = arithmetic.add(15,5);
        expect()
    })
})