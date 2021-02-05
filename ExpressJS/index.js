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

console.log('Server running at http://127.0.0.1:8888/');
app.listen(8888);