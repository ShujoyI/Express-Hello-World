//import the Express module
var express = require('express');
var app = express();

//import the square module
var square = require('./square');
console.log('The area of a square of width 3 is ' + square.area(4));

app.get('/', function(req, res) {
    res.send('Hello World!!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});