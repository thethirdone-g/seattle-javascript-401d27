'use strict';

module.exports = exports = {
  read: (path, (err, buffer) => {
    fs.readFile(path, (err, buffer) => {
      if (err) throw err;
    })
  }
}

