'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(value) {
    if (!this.value) throw new Error('Please provide a value to be pushed.');

    this[this.length] = value;
    this.length++;

    return this.length;
  }

  pop() {
    if (!this.length) throw new Error('This list is empty, my friend.');
    if (this.arguments === 0) throw new Error('No arguments necessary.');

    let lastElement = this[this.length - 1];

    delete this[this.length - 1];
    this.length--;

    return lastElement;
  }

  filter(callback) {
    if (!callback) throw new Error('This method requires a callback.');
    if (!this.length) throw new Error('This list is empty, my friend.');

    let brandNewList = new List();
    for (let i = 0; i < this.length; i++) {
      brandNewList.push(callback(this[i]));
    }
    return brandNewList;
  }

  map(callback) {
    if (!callback) throw new Error('This method requires a callback.');

    let brandNewList = new List();
    for (let i = 0; i < this.length; i++) {
      brandNewList.push(callback(this[i]));
    }
    return brandNewList;
  }

  slice(start, end) {
    if (!start && !end) throw new Error('This method requires both a starting index and an ending index.');

    let brandNewList = new List();
    for (let i = start; i < end; i++) {
      brandNewList.push(this[i]);
    }
    return brandNewList;
  }

  reduce(callback, initialValue) {
    if (!callback) throw new Error('This method requires a callback.');
    if (!initialValue) throw new Error('This method requires an intial value.');

    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i]);
    }
    return initialValue;
  }
}

module.exports = List;