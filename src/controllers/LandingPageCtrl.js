function LandingPageCtrl($scope, $routeParams, $location) {
    $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('LandingPageCtrl', ['$scope', '$routeParams', '$location', LandingPageCtrl]);