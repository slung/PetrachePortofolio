function ResumeCtrl($scope, $location) {
  $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('ResumeCtrl', ['$scope', '$location', ResumeCtrl]);