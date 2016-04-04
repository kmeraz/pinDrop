var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();

mongoose.connect = ('mongodb://localhost:27017');

app.listen(8000);

app.use('/', express.static(__dirname + '/../client'));


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

module.exports = app;