function HomeCtrl($scope, $location) {
    
    //Send statistics to Google Analytics
    ga('send', 'event', 'Pages', 'Home'); 
    
    $scope.changeView = function (view) {
        $location.path(view);
    };
}

myApp.controller('HomeCtrl', ['$scope', '$location', HomeCtrl]);