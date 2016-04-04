function initMap() {

  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 37.090, lng: -95.712},
    zoom: 3
  });
  
  window.onload = function() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                  console.log(position.coords.latitude);
                  var map = new google.maps.Map(mapDiv, {
                    center: {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                     },
                     zoom: 13
                  });


              }, function(error) {
                  alert('Error occurred. Error code: ' + error.code);         
              },{timeout:5000});
          }else{
              alert('no geolocation support');
          }
      };


};