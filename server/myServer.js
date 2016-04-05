var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')


var db = mongoose.connect = ('mongodb://localhost:27017');

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8080);

app.get('/api/pins', function(req, res, next) {
  //respond with all of the pins in the db
});

app.post('/api/pins', function(req, res, next) {
  console.log(req.body);
  res.sendStatus(200);
  //grab the pin info, and then send it to mongodb

});



