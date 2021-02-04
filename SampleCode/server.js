// Two method to write the function

// First method
var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200, { 'Conten-Type': 'text/plain' });
    response.end('hello world\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');

//Second Method

var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello World");
    response.end();
}

http.createServer(onRequest).listen(8888);