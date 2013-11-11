function ProjectsCtrl($scope, $http, $location) {
    
    //Fetch all available projects
    $http({method:'GET', url: 'assets/work/projects.txt'}).success(function( data ){
			
			var projects = $scope.projects = [];
			
			for ( var i = 0; i < data.length; i++ )
			{
				projects.push(data[i]);
			}
		});
    
    //Send to project-dedicated page
    $scope.onProjectClick = function ( project ) {
        
        var projectPath = 'projects/' + project.id;
        $location.path(projectPath);  
    };
}

myApp.controller('ProjectsCtrl', ['$scope', ProjectsCtrl]);