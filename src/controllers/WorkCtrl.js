function WorkCtrl($scope, $http, $modal) {
    
    $http({method:'GET', url: 'assets/work/projects.txt'}).success(function( data ){
			
			var projects = $scope.projects = [];
			
			for ( var i = 0; i < data.length; i++ )
			{
				projects.push(data[i]);
			}
		});
    
    $scope.onProjectClick = function ( project ) {
        
        $scope.project = project;
        
        switch( project.type )
		{
			case "print":{
				
				//$scope.openSlidesForCampaign(modalTemplate);
				
				break;
			}
			default:{
				var modalInstance = $modal.open({
					controller: ModalInstanceCtrl,
					templateUrl: "videoProject.html",
					scope: $scope
				});
			}
		}
		
		$scope.carouselInterval = 5000;
		var slides = $scope.slides = [];
    }
};

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.close = function () {
    $modalInstance.close();
  };
}

myApp.controller('WorkCtrl', ['$scope', WorkCtrl]);