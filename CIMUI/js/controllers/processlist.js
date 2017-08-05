angular
.module('app')
.controller('processListCtrl', processListCtrl);

processListCtrl.$inject = ['$scope', '$timeout', '$stateParams' , '$location', 'LotService', 'EquipmentService', 'ProcessService'];
function processListCtrl($scope, $timeout, $stateParams , $location, LotService, EquipmentService, ProcessService) {
  
  $scope.getAllProcesses = function() 
      {
	  	ProcessService.getAllProcesses('100').then(
				   		function(processList)
				   		{
				   			$scope.processList = processList;
				   			console.log(processList);
				   		});
	  };
  
  $scope.getAllProcesses();


  $scope.setSelectedProcess = function() {
      $scope.selectedProcess = this.process;
      console.log($scope.selectedProcess);

	  $location.path("/processinfo/" + $scope.selectedProcess.processId);

  };
}