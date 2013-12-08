function AboutCtrl($scope, $location) {
    
  //Send statistics to Google Analytics
  ga('send', 'event', 'Pages', 'About');
    
  $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('AboutCtrl', ['$scope', '$location', AboutCtrl]);