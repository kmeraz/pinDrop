function initMap() {

  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 44.540, lng: -78.546},
    zoom: 8
  });
  
  var geo = navigator.geolocation;
  window.onload = function() {
          if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                  alert('it works');
              }, function(error) {
                  alert('Error occurred. Error code: ' + error.code);         
              },{timeout:5000});
          }else{
              alert('no geolocation support');
          }
      };

};