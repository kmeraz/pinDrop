//ADD MORE DEPENDENCIES HERE IF REQUIRED

angular.module('myApp', ['ngRoute'])

.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'app/auth/signin.html',
      controller: 'SiginController'
    })
    .when('/siginup', {
      templateUrl: 'app/auth/signup.html',
      controller: 'SignupController'
    })
    .when('/myPins', {
      templateUrl: 'app/myPins.html',
      controller: 'MyPinsController'
    })
    .when('/', {
      templateUrl: 'app/index.html',
      controller: 'HomeController'
    })
    .otherwise({
      redirectTo: '/singin'
    });


})
