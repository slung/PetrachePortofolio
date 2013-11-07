/* App Module */

var myApp = angular.module('petrachePortfolioApp', ['ngRoute', 'ui.bootstrap']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/landing-page', {templateUrl: 'partials/landing-page.html',   controller: 'LandingPageCtrl'}).
  	  when('/home', {templateUrl: 'partials/home.html',   controller: 'HomeCtrl'}).
      when('/about', {templateUrl: 'partials/about.html',   controller: 'AboutCtrl'}).
      when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'}).
      otherwise({redirectTo: '/landing-page'});
}]);