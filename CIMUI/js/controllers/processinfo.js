angular
.module('app')
.controller('processInfoCtrl', processInfoCtrl);

processInfoCtrl.$inject = ['$scope', '$timeout', '$stateParams' , '$location', 'LotService', 'EquipmentService', 'ProcessService'];
function processInfoCtrl($scope, $timeout, $stateParams , $location, LotService, EquipmentService, ProcessService) {
  
  console.log("Selected Process : " + $stateParams.processId);
  
  $scope.selectedProcessId = $stateParams.processId;
  

  if($scope.selectedProcessId == null)
  {
	  console.log("No Process selected");
	  return;
  }

  $scope.getProcess = function() 
  {
	ProcessService.getProcess('100',$scope.selectedProcessId).then(
					function(processInfo)
					{
						$scope.processInfo = processInfo;
						console.log(processInfo);
					});
  }; 
	 
  $scope.getProcess();
}


