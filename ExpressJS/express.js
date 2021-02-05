var express = require('express');
var app = new express();

app.get('/home', function(req, res) {
    res.send("Hello World");
});

app.post('/home', function(req, res) {
    res.send("You just called the post method");
});

console.log('Server running at http://127.0.0.1:3000/');
app.listen(3000);