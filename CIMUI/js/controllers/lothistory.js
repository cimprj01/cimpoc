//lothistory.js
angular
.module('app')
.controller('lotHistTableCtrl', lotHistTableCtrl);

lotHistTableCtrl.$inject = ['$scope', '$timeout', '$stateParams' , '$location', 'LotService'];
function lotHistTableCtrl($scope, $timeout, $stateParams , $location, LotService) {
  console.log("Selected lot : " + $stateParams.lotId);
  
  $scope.selectedLotId = $stateParams.lotId;

  $scope.getLotHistory = function() 
                            {
	  						   LotService.getLotHistory('100',$scope.selectedLotId).then(
	  								   		function(lotList)
	  								   		{
	  								   			$scope.lotList = lotList;
	  								   			console.log(lotList);
	  								   		});
  							};
  							
  $scope.getLotHistory();
    
}


