function route(pathname) {
    console.log("Route 1");
    console.log("About to route a request for " + pathname + " Router JS");
}

function route1() {
    console.log("Route 2");
}

exports.route = route;
exports.route1 = route1;