function ContactCtrl($scope, $location) {
   $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('ContactCtrl', ['$scope', '$location', ContactCtrl]);