// import the Express module
var express = require('express');
var app = express();
var logger = require('morgan');

app.use(logger('dev'));

// create router object
var router = express.Router();

// create a route to /wow
var wowzer = router.get('/wow', function(req, res) {
    res.send('Wow the router works');
});

// going to /wow uses the router object
app.use('/', wowzer);

// import the square module
var square = require('./square');
console.log('The area of a square of width 3 is ' + square.area(4));


app.get('/', function(req, res) {
    res.send('Hello World!!');
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

app.use(function(err, req, req, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});