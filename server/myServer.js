var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost/mydb');

app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(8080);

var Schema = mongoose.Schema;

var markerSchema = new Schema({

  position: [{lat: Number, lng: Number }],

});

var Marker = mongoose.model('Marker', markerSchema);

var myMarkers = [{lat: 37.770, lng: -122.446}, {lat: 38, lng: -122}, {lat: 37, lng:-122}];

app.get('/api/pins', function(req, res, next) {
  Marker.findById("57043c11228272225218e48a", function(err,doc) {
    res.send(200, doc);
  });

});


app.post('/api/pins', function(req, res, next) {
  console.log(req.body.position.lat, req.body.position.lng);

  Marker.findByIdAndUpdate(
      "57043c11228272225218e48a",
      {$push: 
        {"position": 
          {lat: req.body.position.lat, lng: req.body.position.lng}
        }
      },
      {safe: true, upsert: true},
      function(err, model) {
          console.log('error: ', err);
          res.send('Good job brah!');
      }
  );

});


