var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

var db = mongoose.connect = ('mongodb://localhost:27017');

app.use(express.static(__dirname + '/../client'));
app.listen(8080);

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '/../client/index.html'));
// });

app.get('/api/pins', function(req, res, next) {


})

