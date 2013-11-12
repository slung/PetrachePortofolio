function ProjectsCtrl($scope, $http, $location, $routeParams) {
    
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
          this.changeProject(project);
    };
    
    //Redirect to specified project view
    $scope.changeProject = function (project) {
        var projectPath = 'projects/' + project.id;
        $location.path(projectPath);
    };
    
    //Change project when pressing left or right keyboard keys
    $scope.swapProjects = function (context) {
        
        var urlSplitted = $location.path().split('/');
        var currentProjectId = urlSplitted[urlSplitted.length-1];
        var currentProjectIndex = $scope.getProjectIndexById(currentProjectId);
        
        switch(event.keyCode)
        {
            //BACKSPACE key => go to Projects view
            case 8: {
                $location.path('projects');
                break;
            }
            //RIGHT arrow
            case 39: {
                var nextProjectIndex = currentProjectIndex+1;
                
                //loop through projects
                if (nextProjectIndex == $scope.projects.length)
                    nextProjectIndex = 0;
                
                $scope.changeProject($scope.projects[nextProjectIndex]);
                break;
            }
            //LEFT arrow
            case 37: {
            
                var previousProjectIndex = currentProjectIndex-1;
                
                //loop through projects
                if (previousProjectIndex == 0)
                    previousProjectIndex = $scope.projects.length - 1;
                
                $scope.changeProject($scope.projects[previousProjectIndex]);
                break;
            }
        }
    };
    
    $scope.getProjectIndexById = function (projectId) {
        for (var i=0; i<$scope.projects.length; i++)
            if ($scope.projects[i].id == projectId)
                return i;
    }
}

myApp.controller('ProjectsCtrl', ['$scope', '$routeParams', '$location', ProjectsCtrl]);