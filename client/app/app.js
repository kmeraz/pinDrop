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

  .controller('SigninController', function($scope) {
  
  $scope.data = {okay: 'boddy'};

  });



angular.module('MyPinsModule', [])

  .controller('MyPinsController', function($scope) {

  });



angular.module('HomeModule', [])
  
  .controller('HomeController', function($scope) {

  });



angular.module('SignupModule', [])
  .controller('SignupController', function($scope) {


  });





