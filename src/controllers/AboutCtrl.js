function AboutCtrl($scope, $location) {
  $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('AboutCtrl', ['$scope', '$location', AboutCtrl]);