angular.module('myApp', ['ngRoute', 'SigninModule', 'MyPinsModule', 'HomeModule', 'SignupModule', 'myAppServices'])

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
    .when('/mypins', {
      templateUrl: 'app/mypins.html',
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
  
    $scope.data;
    $scope.signIn = function() {
      if($scope.usernameText && $scope.passwordText) {
        //make a get request to the server, searching for a match 
        //of the username and pwd in the database..if it's a match, then
        //send them to the home page
        console.log('Username:', $scope.usernameText);
        console.log('Password:', $scope.passwordText);
        $location.path('/home');
      } else {
        alert('OOPS! You forgot to fill in both fields');
      }
    };

  });


angular.module('MyPinsModule', [])

  .controller('MyPinsController', function($scope, httpRequests, $location) {
    //here, make a get request to the api for all of the pins
    // we will make this a 1 user application, for now
    $scope.data = {};
    $scope.status = "Find Me";
  
    var init = function() {
      httpRequests.getMyPins()
      .then(function(pins) {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
          center: {lat: 37.776, lng: -122.413},
          zoom: 11
        });
        
        var myPins = [];
        for(var key in pins.position) {
          var marker = new google.maps.Marker({
            position: {
              lat: pins.position[key].lat,
              lng: pins.position[key].lng
            },
            map: map,
            animation: google.maps.Animation.DROP,
          });
        }
        //THIS BLOCK OF CODE IS SO THAT DUMMY DATA A.K.A.
        //DUMMY PINS CAN BE DISPLAYED ON THE MAP
        var marker = new google.maps.Marker({
          position: {
            lat: 37.770,
            lng: -122.447
          },
          map: map,
          animation: google.maps.Animation.DROP,
        });

        var marker = new google.maps.Marker({
          position: {
            lat: 37.820,
            lng: -122.369
          },
          map: map,
          animation: google.maps.Animation.DROP,
        });

        });
    };


    init();

    $scope.showHome = function() {
      $location.path('/home');
    }
  });



angular.module('HomeModule', [])
  
  .controller('HomeController', function($scope, httpRequests, $location) {
    $scope.myLatLang = {};
    $scope.map;
    $scope.pinAdded = false;

    function initMap() {
      $scope.status = "Find Me";
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
          $scope.myLatLang = myLatLang;
          var marker = new google.maps.Marker({
            position: myLatLang,
            map: map,
            animation: google.maps.Animation.DROP,
            // we can add a title if we'd like --> title: 'me'
           
          });
        }, function(error) {
            console.log('Error occurred. Error code: ' + error.code);         
        },{timeout:5000});
      } else {
          alert('no geolocation support');
      }        
    }
  
  //INITIALIZE THE MAP
  initMap();
  
  $scope.addPin = function() {
    $scope.pinAdded = true;
    var mapInfo = $scope.map;
    var pin = {
      position: $scope.myLatLang,
      animation: google.maps.Animation.DROP
    };
    console.log(pin);
    httpRequests.addPin(pin);
  };

  $scope.seePins = function() {
    $location.path('/mypins');
  };
});


angular.module('SignupModule', [])
  .controller('SignupController', function($scope, $location) {
    $scope.createAccount = function() {
      if($scope.usernameText && $scope.passwordText) {
        //make a get request to the server, searching for a match 
        //of the username and pwd in the database..if it's a match, then
        //send them to the home page
        console.log('Username:', $scope.usernameText);
        console.log('Password:', $scope.passwordText);
        $location.path('/home');
      } else {
        alert('OOPS! You forgot to fill in both fields');
      }
    };


  });

angular.module('myAppServices', [])
  .factory('httpRequests', function($http) {
    var getMyPins = function() {
      return $http({
        method: 'GET',
        url: '/api/pins',
      })
      .then(function(res) {
        console.log('this is my resdata', res.data);
        return res.data;
      });
    };
    //eventually add a function to grab a specific user's pins
    
    var addPin = function(pin) {
        return $http({
        method: 'POST',
        url: '/api/pins',
        data: pin
      });
    };

    return {
      getMyPins: getMyPins,
      addPin: addPin
    }
  });




