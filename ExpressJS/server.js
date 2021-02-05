var express = require('express');
var app = express();
var router = require('./router');

app.use('/router', router);

app.get('/router/*', function(req, res) {
    res.send("Sorry, Invalid URL");
});

console.log('Server running at http://127.0.0.1:8888/');
app.listen(8888);