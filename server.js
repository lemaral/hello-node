var http = require('http');

http.createServer(on8080).listen(8080);
http.createServer(on8081).listen(8081);

function on8080(request, response) {
  console.log('8080: Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('8080: Hello, Node! v0.4.3');
}

function on8081(request, response) {
  console.log('8081: Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('8081: Hello, Node! v0.4.3');
}
