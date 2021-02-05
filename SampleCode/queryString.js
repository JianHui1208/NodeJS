var http = require("http");
var url = require("url");
const { route } = require("./router");
const { route1 } = require("./router");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.(Server JS)");

        route(pathname);

        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("Hello World");

        route1();

        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.")
}

exports.start = start;