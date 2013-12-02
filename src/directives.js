myApp.directive('projectKeypress', function($document) {

    return function(scope, element, attr) {
        
        var handler = function () {
            $document.unbind('keydown', handler);
            scope.$apply(scope.swapProjects);
        };
        
        $document.keydown(handler);
    }
})
.directive('footer',function ($timeout) {
    return {
        restrict: 'E',
        link: function (scope, elem, attrs, ctrl) {
            $timeout(function (){
                var htmlText = 'Copyright &copy Alexandru Petrache ' + new Date().getFullYear() + '. All rights reserved.';
                jQuery(".footer").html(htmlText);
            }, 0);
        }
    }   
});