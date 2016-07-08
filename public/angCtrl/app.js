var app = angular.module('gaex', ['ui.router']);

app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'public/index.html',
    controller: ''
  })
  .state('about', {
    url: '/about',
    templateUrl: 'public/views/about.html',
    controller: ''
  })
  .state('contact', {
    url: '/contact',
    templateUrl: 'public/views/contact.html',
    controller: ''
  })

  $locationProvider.html5Mode(true);

}]);
