var http = require('http');

http.createServer().listen(8081).on('request', onRequest);
http.createServer().listen(8080).on('request', onRequest);

function onRequest(request, response) {
  var received = 'v0.7: Received request on port ' + this.address().port;
  console.log(received + ' for URL: ' + request.url);
  response.writeHead(200);
  response.end(received);
}
