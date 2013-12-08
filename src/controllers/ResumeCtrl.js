function ResumeCtrl($scope, $location) {
    
  //Send statistics to Google Analytics
  ga('send', 'event', 'Pages', 'Resume');  

  $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('ResumeCtrl', ['$scope', '$location', ResumeCtrl]);