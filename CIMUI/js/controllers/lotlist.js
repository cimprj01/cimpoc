//lotlist.js
angular
.module('app')
.controller('lotListTableCtrl', lotListTableCtrl);

lotListTableCtrl.$inject = ['$scope', '$timeout' , '$location', 'LotService'];
function lotListTableCtrl($scope, $timeout, $location, LotService) {

  $scope.getLotList = function() 
                            {
	  						   LotService.getLotList('100').then(
	  								   		function(lotList)
	  								   		{
	  								   			$scope.lotList = lotList;
	  								   			console.log(lotList);
	  								   		});
  							};
  							
  $scope.getLotList();
  
  $scope.setSelectedLot = function() {
      $scope.selectedLot = this.lot;
      console.log($scope.selectedLot);
      $location.path("/lotinfo/" + $scope.selectedLot.lotId);
  };
  
  $scope.showStartLot = function(lot) {
      $scope.selectedLot = lot;
      console.log($scope.selectedLot);
      $location.path("/startlot/" + $scope.selectedLot.lotId);
  };   
  
}


