'use strict';

const fs = require('fs');

class Bitmap {
  constructor(filePath) {
    this.file = filePath;
  }
  // buffer is a datatype that is retrieved by using fs.readfile
  // parse(buffer) is intended to parse the file buffer's contents
  parse(buffer) {
    this.type = buffer.toString('utf-8', 0, 2);
  }
  // this function creates a new file path and new file name for this file.
  // call back is the intended function
  transform(callback) {
    transformDictionary[callback](this);
    this.newFile = this.file.replace(/\.bmp/, `.${callback}.bmp`);
  }
}
const transformGreyscale = bmp => {
  console.log('Transforming bitmap into greyscale', bmp);
};

// creating an object containing different methods for transformation
const transformDictionary = {
  // To Do : need to make a greyscale transformation function in the future
  greyscale: transformGreyscale,
};

const readAndTransform = () => {
  // if breaks, try fs.readFile(file, (err, buffer) => {
  fs.readFile(file, (err, buffer) => {
    if (err) {
      throw err;
    }
    baldy.parse(buffer);

    // need to create the callback function
    baldy.transform(callback);

    fs.writeFile(baldy.newFile, baldy.buffer, (err, out) => {
      if (err) throw err;
      console.log(`BitMap tranformed: ${baldy.newFile}`);
    });
  });
};

const [file, callback] = process.argv.slice(2);

let baldy = new Bitmap(file);

readAndTransform();