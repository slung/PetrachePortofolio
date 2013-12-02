myApp.directive('projectKeypress', function($document) {

    return function(scope, element, attr) {
        
        var handler = function () {
            $document.unbind('keydown', handler);
            scope.$apply(scope.swapProjects);
        };
        
        $document.keydown(handler);
    }
})
//.directive('footer',['$timeout', function (timer) {
//    /* Note the injection of the $timeout service */
//    return {
//        restrict: 'E',
//        link: function (scope, elem, attrs, ctrl) {
//             var replace = function (elem){
//                var htmlText = 'Copyright &copy Alexandru Petrache ' + new Date().getFullYear() + '. All rights reserved.';
//                elem.html(htmlText);
//            }
//             
//            timer(replace(elem), 100);
//        }
//    }   
//}]);
    