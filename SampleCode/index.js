var server = require("./queryString");
var router = require("./router");

server.start(router.route)