var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var mongoose = require('mongoose');
var upload = multer();
var app = new express();

mongoose.connect('mongodb://localhost/my_db');
app.set('view engine', 'pug');
app.set('views', './views');
// can set multiple static assests
app.use(express.static('./views/IMG'));

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

// Start Form
app.get('/', function(req, res) {
    res.render('form');
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

app.post('/save', function(req, res) {
    console.log(req.body);
    res.send("recieved your request!");
});
// End Form

// start database
app.get('/person', function(req, res) {
    res.render('person');
});

// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));
//form-urlencoded

// for parsing multipart/form-data
app.use(upload.array());
app.use(express.static('public'));

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});

var Person = mongoose.model("Person", personSchema);

app.post('/person', function(req, res) {
    var personInfo = req.body;

    if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
        res.render('show_message', {
            message: "Sorry, you provided worng info",
            type: "error"
        });
    } else {
        var newPerson = new Person({
            name: personInfo.name,
            age: personInfo.age,
            nationality: personInfo.nationality
        });

        newPerson.save(function(err, Person) {
            if (err) {
                res.render('show_message', {
                    message: "Database error",
                    type: "error"
                });
            } else {
                res.render('show_message', {
                    message: "New person added",
                    type: "success",
                    person: personInfo
                });
            }
        })
    }
})

console.log('Server running at http://127.0.0.1:8888/');
app.listen(8888);