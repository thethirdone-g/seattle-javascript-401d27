'use strict';

const fs = require('fs');

class Bitmap {
  constructor(filePath) {
    this.file = filePath;
  }
  // buffer is a datatype that is retrieved by using fs.readfile
  // parse is intended to parse the file buffer's contents
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

// creating an object containing different methods for transformation
const transformDictionary = {
  // need to make a greyscale transformation function in the future
  // greyscale: transformGreyScale;
};