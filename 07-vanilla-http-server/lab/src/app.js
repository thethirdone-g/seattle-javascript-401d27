'use strict';

// This is the 1st party library
const http = require('http');

// Local libraries
// This is getting requests and it will help make sense of them by parsing it. It will go through the URL and return an object with things like path, query params, i.e.
// ** Will also deal with POST data and append JSON to req.body if sent **
const parser = require('./lib/parser.js');

const requestHandler = (request, response) => {
  console.log(`${request.method} ${request.url}`);

  // Parse the URL
  parser(request)
    .then(request => {

    // The "if statements" below are the "routes" and do the same things that express does.
      if (request.method === 'GET' && request.parsed.pathname === '/') {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 200;
        response.statusMessage = 'Ok';

        response.write(`<!DOCTYPE html><html><body><h1>${request.query.you}</h1></body></html>`);

        response.end();
        return;
      }

      // Here, we have a "POST" request which will always return a JSON object. That object will either be the JSON that you postd in or an error object.
      else if (request.method === 'POST' && request.parsed.pathname === '/data') {
        response.setHeader('Content-Type', 'text/json');
        response.statusCode = 200;
        response.statusMessage = 'OK';
        response.write(JSON.stringify(request.body));
        response.end();
        return;
      }

      else {
        response.setHeader('Content-Type', 'text/html');
        response.statusCode = 404;
        response.statusMessage = 'Not Found';
        response.write('Resource Not Found');
        response.end();
      }
    })
    .catch(err => {
      response.writeHead(500);
      response.write(err);
      response.end();
    });
};

// Server Callback
const app = http.createServer(requestHandler);

// Expose the start and stop methods. Index.js will make use of these.

module.exports = {
  start: (port, callback) => app.listen(port, callback),
  stop: (callback) => app.close(callback),
};