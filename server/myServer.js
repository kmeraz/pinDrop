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

var Schema = mongoose.Schema;

var markerSchema = new Schema({
  position: String,
  animation: Number
});

var Marker = mongoose.model('Marker', markerSchema);

var myMarkers = [{lat: 37.770, lng: -122.446}, {lat: 38, lng: -122}, {lat: 37, lng:-122}];

app.get('/api/pins', function(req, res, next) {
  //respond with all of the pins in the db
  res.send(myMarkers);
});


app.post('/api/pins', function(req, res, next) {
  myMarkers.push(req.body.position);
  console.log(myMarkers);


  // var newMarker = Marker({  
  //     position: {
  //       lat: req.body.position.lat,
  //       lng: req.body.position.lng
  //     },
  //     animation: req.body.animation
  //   });

  // newMarker.save(function(err) {
  //   if (err) {
  //    throw err;
  //  }
      
  //   console.log('new marker created!!');
  res.sendStatus(200);

  });

  //grab the pin info, and then send it to mongod



