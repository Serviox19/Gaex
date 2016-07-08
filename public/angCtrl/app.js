var app = angular.module('gaex', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '',
    controller: ''
  })
  .state('about', {
    url: '/about',
    templateUrl: '',
    controller: ''
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '',
    controller: ''
  })

  $locationProvider.html5Mode(true);

}]);
