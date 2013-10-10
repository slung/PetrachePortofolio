/* Controllers */

myApp.controller('HomeCtrl', function($scope, $modal){
  $scope.items = ['item1', 'item2', 'item3'];
    $scope.selected = {};
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'myModalContent.html',
            scope: $scope
        });
        console.log('modal opened');
        modalInstance.result.then(function () {
            console.log($scope.selected);
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
    };
});

function AboutCtrl($scope) {
  
};

function ContactCtrl($scope) {
  
};

myApp.controller('AboutCtrl', ['$scope', AboutCtrl]);
myApp.controller('ContactCtrl', ['$scope', ContactCtrl]);