var express = require('express');
var app = new express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/first_template', function(req, res) {
    res.render('first_view');
})

app.get('/dynamic_view', function(req, res) {
    res.render('dynamic', {
        name: "Tutorial Point",
        url: "http://www.tutorialspoint.com"
    });
});

app.get('/home', function(req, res) {
    res.render('home', {
        user: { name: "Ali", age: "20" }
    });
});

app.get('/sign_up', function(req, res) {
    res.render('sign_up');
});

app.get('/content', function(req, res) {
    res.render('content');
});


console.log('Server running at http://127.0.0.1:8888/');
app.listen(8888);