'use strict';

const fs = require('fs');

function Bitmap(filePath) {
  this.path = filePath;
}

Bitmap.prototype.parse = function(buffer) {
  this.type = buffer.toString('utf-8', 0, 2);
  this.buffer = buffer; // I don't necessarily know what this is doing.
};

Bitmap.prototype.transform = function(operation) {
  transformDictionary[operation](this);
  this.newFile = this.path.replace(/\.bmp/, `.${operation}.bmp`);
};


// These will help the readAndTransformAndWrite function coming up next.
const copyFile = (bmp) => {
  console.log('This will be used to copy the frickin\' file');
};

const overWrite = (bmp) => {
  console.log('This will be used to write on top of the frickin\' file');
  bmp.buffer = Buffer.from('Your frickin\' file has been overwritten');
};

const colorGoAway = (bmp) => {
  console.log('This will be used to remove all the color from the frickin\' file');
  for (let i = 122; i < 1146; i+= 4) {
    let colorAverage = (bmp.buffer[i] + bmp.buffer[i + 1] + bmp.buffer[i + 2]) /3;
    bmp.buffer[i] = colorAverage;
    bmp.buffer[i + 1] = colorAverage;
    bmp.buffer[i + 2] = colorAverage;
  }
};

const transformDictionary = {
  write: overWrite,
  copy: copyFile,
  grey: colorGoAway,
};

function readAndTransformAndWrite() {
  fs.readFile(path, (err, buffer) => {
    if (err) throw err;

    kindOfFile.parse(buffer);

    kindOfFile.transform(operation);

    fs.writeFile(kindOfFile.newFile, kindOfFile.buffer, (err, out) => {
      if (err) throw err;
      console.log(`Bitmap has frickin' transformed: ${kindOfFile.newFile}`);
    });
  });
}

const [path, operation] = process.argv.slice(2); // I don't necessarily know what [] means here.
let kindOfFile = new Bitmap(path);

readAndTransformAndWrite();