//lotinfo.js
angular
.module('app')
.controller('startLotCtrl', startLotCtrl);

startLotCtrl.$inject = ['$scope', '$timeout', '$stateParams' , '$location', 'LotService', 'EquipmentService', 'ProcessService'];
function startLotCtrl($scope, $timeout, $stateParams , $location, LotService, EquipmentService, ProcessService) {
  console.log("Selected lot : " + $stateParams.lotId);
  
  $scope.selectedLotId = $stateParams.lotId;
  $scope.startlotprocess = false; 
  $scope.startlotprogress=false;
  $scope.getLotInfo = function() 
                            {
	  						   LotService.getLotInfo('100', $scope.selectedLotId).then(
	  								   		function(lotInfo)
	  								   		{
	  								   			$scope.lotInfo = lotInfo;
	  								   			console.log(lotInfo + " : " + lotInfo.lotJobProcess);
	  								   		});
  							};					
  $scope.getLotInfo();
  
  
  $scope.showWhatsNext = function() {
	    console.log("Calling getLotNextProcessStep()");
		console.log($scope.lotInfo);
	    $scope.lotNextProcessStep = LotService.getLotNextProcessStep('100', $scope.lotInfo.lotId, $scope.lotInfo.lotJobProcess.processId).then(
	    						   function(nextProcessRoute)
	    						   {
	    							   $scope.nextProcessRoute = nextProcessRoute;
	    							   if($scope.nextProcessRoute!=null && $scope.nextProcessRoute.txnResult == 0)
	    							    {
	    							    	$scope.showWhatsNextPane = true;
	    							    }
	    							   console.log("Next process step : " + nextProcessRoute);
	    						   }
	                              );
	    $scope.lotNextProcessStep();
	    
	  };
	  
	  
	  
  //Start of startlot screen functions
  $scope.getProcessList = function() 
      {
	  	ProcessService.getAllProcesses('100').then(
				   		function(processList)
				   		{
				   			$scope.processList = processList;
				   			console.log(processList);
				   		});
	  };
  $scope.getProcessList();
  
  
  $scope.startLotResult = false;
  
  $scope.setSelectedProcess = function() {
	  
      $scope.selectedProcess = this.process;
      console.log($scope.selectedProcess);
      $scope.startlotprogress = true;
	  $scope.startlotprocess = true;
	  //$scope.startLot();
  };
    
  $scope.startLot = function() {
	  
	  if($scope.selectedProcess == null)
	  {
		  console.log("No Process selected");
		  return;
	  }
	  
   $scope.startLotStep = function() {
	   $scope.startlotprogress=true;
		  								ProcessService.startLot('100', this.lotInfo.lotId, $scope.selectedProcess.processId).then(
								   		function(route)
								   		{
								   			//$scope.route = route;
								   			console.log(route);
								   			if(route!=null && route.errorCode == 0)
		    							    {
								   				$scope.route = route.cimObject;
								   				$scope.startLotResult = true;
		    							    }
								   		   $scope.startLotResultMsg = "Lot Started Successflly";
		    							   console.log("Lot Started Successfully : ");								   			
								   		});
	  						};
	  
	$scope.startLotStep();
	  
	 
  };

  $scope.gotoLotInfo = function() {
      $location.path("/lotinfo/" + $scope.selectedLotId);
  };
  
  //End of startlot screen functions  

}


