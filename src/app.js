/* App Module */
var myApp = angular.module('petrachePortfolioApp', ['ngRoute', 'ngAnimate'],
  function($routeProvider, $locationProvider) {
      
    $routeProvider.when('/landing-page', {
      templateUrl: 'partials/landing-page.html',
      controller: LandingPageCtrl
    });
      
    $routeProvider.when('/home', {
      templateUrl: 'partials/home.html',
      controller: HomeCtrl
    });
      
    $routeProvider.when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: ProjectsCtrl
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
      
      $routeProvider.when('/projects/:project_id', {
          controller: ProjectsCtrl,
          templateUrl: function (params) {
            return 'partials/projects/' + params.project_id + '.html'
          }
          
        });
      
    $routeProvider.otherwise({redirectTo: '/landing-page'})
});