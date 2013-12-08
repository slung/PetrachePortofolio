function LandingPageCtrl($scope, $routeParams, $location) {
    
    //Send statistics to Google Analytics
    ga('send', 'event', 'Pages', 'Landing Page');
    
    $scope.mouseOverListen=false;
    $scope.mouseOverGunControl = false;
    $scope.mouseOverWebChaser = false;
    $scope.mouseOverWriting = false;
    
    $scope.changeView = function (view) {
        $location.path(view);
    };
    
    //Listen
    $scope.onListenMouseover = function () {
        $scope.mouseOverListen = true;
    };
    
    $scope.onListenMouseleave = function () {
        $scope.mouseOverListen = false;
    };
    
    //Gun control
    $scope.onGunControlMouseover = function () {
        $scope.mouseOverGunControl = true;
    };
    
    $scope.onGunControlMouseleave = function () {
        $scope.mouseOverGunControl = false;
    };
    
    //Web chaser
    $scope.onWebChaserMouseover = function () {
        $scope.mouseOverWebChaser = true;
    };
    
    $scope.onWebChaserMouseleave = function () {
        $scope.mouseOverWebChaser = false;
    };
    
    //Writing
    $scope.onWritingMouseover = function () {
        $scope.mouseOverWriting = true;
    };
    
    $scope.onWritingMouseleave = function () {
        $scope.mouseOverWriting = false;
    };
};

myApp.controller('LandingPageCtrl', ['$scope', '$routeParams', '$location', LandingPageCtrl]);