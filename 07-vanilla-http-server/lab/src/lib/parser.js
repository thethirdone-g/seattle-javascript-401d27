'use strict';

// First Party Modules
const url = require('url');
const queryString = require('querystring');

module.exports = (request) => {
  return new Promise((resolve, reject) => {
    if(!(request || request.url)) {
      reject('Invalid Request Object. Cannot Parse');
    }
    // The request url = http://localhost:3000/api/v1/notes?id=12345
    request.parsed = url.parse(request.url);
    request.query = queryString.parse(request.parsed.query);

    if(!request.method.match(/POST|PUT|PATCH/)) {
      resolve(request);
    }

    let text = '';

    request.on('data', (buffer) => {
      text += buffer.toString();
    });

    request.on('end' () => {
      try{
        request.body = JSON.parse(text);
        resolve(request);
      }
      catch(err) {
        reject(err);
      }
    });
    request.on('err', reject);
  });
};