angular.module('myApp', ['ngRoute', 'SigninModule', 'MyPinsModule', 'HomeModule', 'SignupModule'])

.config(function($routeProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/signin.html',
      controller: 'SigninController'
    })
    .when('/signup', {
      templateUrl: 'app/signup.html',
      controller: 'SignupController'
    })
    .when('/myPins', {
      templateUrl: 'app/myPins.html',
      controller: 'MyPinsController'
    })
    .when('/home', {
      templateUrl: 'app/home.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/signin'
    });
});


angular.module('SigninModule', [])

  .controller('SigninController', function($scope, $location) {
  
    $scope.data = 5;
    $scope.createAccount = function() {
      if($scope.usernameText && $scope.passwordText) {
        console.log('Username:', $scope.usernameText);
        console.log('Password:', $scope.passwordText);
        $location.path('/home');
      } else {
        alert('OOPS! You forgot to fill in both fields');
      }
    };

  });



angular.module('MyPinsModule', [])

  .controller('MyPinsController', function($scope) {

  });



angular.module('HomeModule', [])
  
  .controller('HomeController', function($scope) {
      function initMap() {

      var mapDiv = document.getElementById('map');
      var map = new google.maps.Map(mapDiv, {
        center: {lat: 37.090, lng: -95.712},
        zoom: 3
      });
        // window.onload = function() {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
              var map = new google.maps.Map(mapDiv, {
                center: {
                  lat: position.coords.latitude,
                  lng: position.coords.longitude
                 },
                 zoom: 13
              });

              var myLatLang = {lat: position.coords.latitude, lng: position.coords.longitude}

              var marker = new google.maps.Marker({
                position: myLatLang,
                map: map,
                animation: google.maps.Animation.BOUNCE,
                // we can add a title if we'd like --> title: 'me'

              });


          }, function(error) {
              console.log('Error occurred. Error code: ' + error.code);         
          },{timeout:5000});
      } else {
          alert('no geolocation support');
      }
    // window.onload = function() {
    //   console.log('the window has loaded!');
    //   initMap();
  }
  initMap();
});


angular.module('SignupModule', [])
  .controller('SignupController', function($scope) {


  });





