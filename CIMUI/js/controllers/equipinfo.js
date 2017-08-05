angular
.module('app')
.controller('equipInfoCtrl', equipInfoCtrl);

equipInfoCtrl.$inject = ['$scope', '$timeout', '$stateParams' , '$location', 'LotService', 'EquipmentService', 'ProcessService'];
function equipInfoCtrl($scope, $timeout, $stateParams , $location, LotService, EquipmentService, ProcessService) {
  
  $scope.getAllEquipments = function() 
      {
	  	EquipmentService.getAllEquipments('100').then(
				   		function(equipList)
				   		{
				   			$scope.equipList = equipList;
				   			console.log(equipList);
				   		});
	  };
  
  $scope.getAllEquipments();
}


