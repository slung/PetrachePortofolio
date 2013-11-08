/* App Module */

//var myApp = angular.module('petrachePortfolioApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']).
//  config(['$routeProvider', function($routeProvider, $locationProvider) {
//  $routeProvider.
//      when('/landing-page', {templateUrl: 'partials/landing-page.html',   controller: 'LandingPageCtrl'}).
//  	  when('/home', {templateUrl: 'partials/home.html',   controller: 'HomeCtrl'}).
//      when('/about', {templateUrl: 'partials/about.html',   controller: 'AboutCtrl'}).
//      when('/contact', {templateUrl: 'partials/contact.html', controller: 'ContactCtrl'}).
//      otherwise({redirectTo: '/landing-page'});
//      
//      $locationProvider.html5Mode(true);
//}]);

var myApp = angular.module('petrachePortfolioApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap'],
  function($routeProvider, $locationProvider) {
      
    $routeProvider.when('/landing-page', {
      templateUrl: 'partials/landing-page.html',
      controller: LandingPageCtrl
    });
      
    $routeProvider.when('/home', {
      templateUrl: 'partials/home.html',
      controller: HomeCtrl
    });
      
    $routeProvider.when('/work', {
      templateUrl: 'partials/work.html',
      controller: WorkCtrl
    });
      
    $routeProvider.when('/about', {
      templateUrl: 'partials/about.html',
      controller: AboutCtrl
    });
    
    $routeProvider.when('/contact', {
      templateUrl: 'partials/contact.html',
      controller: ContactCtrl
    });
      
    $routeProvider.when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: ResumeCtrl
    });
      
    $routeProvider.otherwise({redirectTo: '/landing-page'})

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(true);
});