myApp.directive('projectKeypress', function($document) {

    return function(scope, element, attr) {
        
        var handler = function () {
            $document.unbind('keydown', handler);
            scope.$apply(scope.swapProjects);
        };
        
        $document.keydown(handler);
    }
});