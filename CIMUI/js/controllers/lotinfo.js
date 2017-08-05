//lotinfo.js
angular
.module('app')
.controller('lotInfoCtrl', lotInfoCtrl);

lotInfoCtrl.$inject = ['$scope', '$timeout', '$stateParams' , '$location', 'LotService', 'EquipmentService', 'ProcessService'];
function lotInfoCtrl($scope, $timeout, $stateParams , $location, LotService, EquipmentService, ProcessService) {
  console.log("Selected lot : " + $stateParams.lotId);
  
  $scope.selectedLotId = $stateParams.lotId;

  $scope.showWhatsNextBtn = false;
  $scope.showStartLotBtn = false;
  $scope.showEquipmentListBtn = false;
  $scope.showProcessLotStepBtn = false;
  $scope.showLotHistoryBtn = false;
  $scope.startlotprogress=false;
  //$scope.showLotHistoryBtn = false;

  $scope.processLotStepResultMsg = null;
  
  $scope.getLotInfo = function() 
                            {
	  						   LotService.getLotInfo('100', $scope.selectedLotId).then(
	  								   		function(lotInfo)
	  								   		{
	  								   			$scope.lotInfo = lotInfo;

												$scope.showStartLotBtn = $scope.lotInfo.lotJobProcess === null;

												$scope.showWhatsNextBtn = !$scope.showStartLotBtn;												 

	  								   			console.log(lotInfo);
	  								   		});
  							};					
  $scope.getLotInfo();
  
  //UI Actions for lotinfo screen
  $scope.showWhatsNextPane = false;
  $scope.showToolListPane = false;
  
  $scope.showWhatsNext = function() {
	    console.log("Calling getLotNextProcessStep()");
		console.log($scope.lotInfo);
	    $scope.lotNextProcessStep = function() {
	    								LotService.getLotNextProcessStep('100', $scope.lotInfo.lotId, $scope.lotInfo.lotJobProcess.processId).then(
	
			    						   function(nextProcessRoute)
			    						   {
			    							   if(nextProcessRoute!=null && nextProcessRoute.errorCode == 0)
			    							    {
			    							    	$scope.showWhatsNextPane = true;
													
													$scope.showWhatsNextBtn = false;
													$scope.showEquipmentListBtn = true;
			    							    	
													$scope.nextProcessRoute = nextProcessRoute.cimObject;
			    							    }
			    							   console.log(nextProcessRoute);

											   if(nextProcessRoute.errorCode != 0)
											   {
													$scope.processLotStepResult = true;
													$scope.processLotStepResultMsg = nextProcessRoute.errorMessage;

													if(nextProcessRoute.errorCode == -200)
												    {
														//$scope.showLotHistory();
														$scope.showWhatsNextBtn = false;
														$scope.showProcessLotStepBtn = false;
														$scope.showLotHistoryBtn = true;														
												    }
											   }
			    						   }
			                              );
	    							}
	    $scope.lotNextProcessStep();
	    
	  };
	  
  $scope.showStartLot = function() {
      $location.path("/startlot/" + $scope.selectedLotId);
  };

   $scope.StartLprocess = function () {
            
            $scope.startlotprocess = true; 
    }
  $scope.showToolList = function() {
	    console.log("Calling getNextEquipmentsForLot()");
		
		var $myscope = this.$parent;

		console.log($myscope.lotInfo + " : " + $myscope.nextProcessRoute);
	    this.nextEquipmentsForLot = function() {
	    								ProcessService.getNextEquipmentsForLot('100', $myscope.lotInfo.lotId, $myscope.nextProcessRoute.processId).then(
	
			    						   function(nextEquipmentList)
			    						   {
			    							   if(nextEquipmentList!=null && nextEquipmentList.errorCode == 0)
			    							    {													
			    							    	$myscope.showWhatsNextPane = false;
													$myscope.showToolListPane = true;

													//$myscope.showEquipmentListBtn = false;
													//$myscope.showProcessLotStepBtn = true;
													
													$myscope.nextEquipmentList = nextEquipmentList.cimObject;													
			    							    }
			    							   console.log(nextEquipmentList);											   
			    						   }
			                              );
	    							}

		this.nextEquipmentsForLot();
	    
	  };


	$scope.setSelectedTool = function() {
		  var $myscope = this.$parent;

		  $myscope.selectedTool = this.tool;
		  console.log($myscope.selectedTool);

		  $myscope.showEquipmentListBtn = false;
		  $myscope.showProcessLotStepBtn = true;
		  $scope.startlotprogress = true;

		  //$myscope.processLotStep();
	  };

   $scope.processLotStep = function() {
	    console.log("Calling getNextEquipmentsForLot()");
		
		var $myscope = this.$parent;
		$scope.startlotprogress = true;
		console.log($myscope.lotInfo + " : " + $myscope.nextProcessRoute);
	    this.processLotStep = function() {
	    								ProcessService.processLotStep('100', $myscope.lotInfo.lotId, $myscope.nextProcessRoute.processId, $myscope.nextProcessRoute.routeId, $scope.selectedTool.toolId).then(
	
			    						   function(nextProcessRoute)
			    						   {
			    							   if(nextProcessRoute!=null && nextProcessRoute.errorCode == 0)
			    							    {													
			    							    	$myscope.showWhatsNextPane = false;
													$myscope.showToolListPane = false;
													
													$myscope.showWhatsNextBtn = true;
													$myscope.showEquipmentListBtn = false;
													$myscope.showProcessLotStepBtn = false;													
																										
			    							    }
												$myscope.processLotStepResult = true;
												$myscope.processLotStepResultMsg = nextProcessRoute.errorMessage;
			    							    console.log(nextProcessRoute);											   
			    						   }
			                              );
	    							}

		this.processLotStep();
	    
	  };
	  
  $scope.showLotHistory = function() {
      $location.path("/lothistory/" + $scope.selectedLotId);
  };

  $scope.gotoLotInfo = function() {
      $location.path("/lotinfo/" + $scope.selectedLotId);
  };


  //End of UI Actions for lotinfo screen

}

