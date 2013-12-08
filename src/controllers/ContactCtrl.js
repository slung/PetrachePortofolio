function ContactCtrl($scope, $location) {
   
   //Send statistics to Google Analytics
   ga('send', 'event', 'Pages', 'Contact');
    
   $scope.changeView = function (view) {
        $location.path(view);
    };
};

myApp.controller('ContactCtrl', ['$scope', '$location', ContactCtrl]);