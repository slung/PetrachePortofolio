/* Controllers */

myApp.controller('HomeCtrl', function($scope, $modal, $http){
	$scope.open = function (type, modalTemplate) {
		
		switch( type )
		{
			case "carousel":{
				
				$scope.openSlidesForCampaign(modalTemplate);
				
				break;
			}
			default:{
				var modalInstance = $modal.open({
					controller: ModalInstanceCtrl,
					templateUrl: modalTemplate + ".html",
					scope: $scope
				});
			}
		}
		
		$scope.carouselInterval = 5000;
		var slides = $scope.slides = [];
			
	};
	
	$scope.openSlidesForCampaign = function( campaign ){
		
		$scope.campaign = campaign;
		
		$http.get( "images/portofolio/" + campaign + "/info.json").success(function( data ){
			
			data = data[0];
			var slides = $scope.slides = [];
			
			for ( var i = 1; i <= data.count; i++ )
			{
				var image = "img" + i;
				
				slides.push({
					src: "images/portofolio/" + $scope.campaign + "/" + image + ".jpg",
					portofolio: data.portofolio,
					text: data[image]
				});
			}
			
			var modalInstance = $modal.open({
				controller: ModalInstanceCtrl,
				templateUrl: $scope.campaign + ".html",
				scope: $scope
			});
		});
	};
});

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.close = function () {
    $modalInstance.close();
  };
};

function AboutCtrl($scope) {
  
};

function ContactCtrl($scope) {
  
};

myApp.controller('AboutCtrl', ['$scope', AboutCtrl]);
myApp.controller('ContactCtrl', ['$scope', ContactCtrl]);