function HomeCtrl($scope, $location) {
    
    $scope.changeView = function (view) {
        $location.path(view);
    };
}

myApp.controller('HomeCtrl', ['$scope', '$location', HomeCtrl]);