var app = angular.module('app');

//Lot Service
app.service('LotService', function($http, $log, $q) {
  this.data;
  var self = this;

  this.getLotList = function(userId) {
	var result;
	var deferred = $q.defer();
    $http.get('http://localhost:8082/cim-service/lotservice/getAllLots?user=' + userId)
     .then( function(success) {
    	$log.info(success.data.cimObject);
    	
    	result = success.data.cimObject;
    	deferred.resolve(result);
      }
      , function(error) {
            $log.error('Error: ' + error);
            deferred.reject(error.status);
      });
    
    result = deferred.promise;
	return $q.when(result);
  };
  
	   
  this.getLotInfo = function(userId, lotId) {
	    var result;
		var deferred = $q.defer();
		$http.get('http://localhost:8082/cim-service/lotservice/lotinfo?user=' + userId  + '&lotId=' + lotId)
		.then(function(success) {
	    	$log.info(success.data.cimObject);
	    	result = success.data.cimObject;
	    	deferred.resolve(result);
	     }
	    , function(error) {
	            $log.error('Error: ' + error);
	            deferred.reject(error.status);
	    });
	    result = deferred.promise;
		return $q.when(result);
  	};
  	
 
    this.getLotNextProcessStep = function(userId, lotId, processId) {
	    var result;
		var deferred = $q.defer();
		$http.get('http://localhost:8082/cim-service/cimservice/getLotNextProcessStep?user=' + userId  + '&lotId=' + lotId + '&processId=' + processId)
			.then(function(success) {
		    	$log.info(success.data.cimObject);
		    	result = success.data;
		    	deferred.resolve(result);
		     }
		    , function(error) {
		            $log.error('Error: ' + error);
		            deferred.reject(error.status);
		    });
	    result = deferred.promise;
		return $q.when(result);
  	};

	this.getLotHistory = function(userId, lotId) {
	    var result;
		var deferred = $q.defer();
		$http.get('http://localhost:8082/cim-service/lotservice/lothistory?user=' + userId  + '&lotId=' + lotId)
		.then(function(success) {
	    	$log.info(success.data.cimObject);
	    	result = success.data.cimObject;
	    	deferred.resolve(result);
	     }
	    , function(error) {
	            $log.error('Error: ' + error);
	            deferred.reject(error.status);
	    });
	    result = deferred.promise;
		return $q.when(result);
  	};
  	
}
);



//Process Service
app.service('ProcessService', function($http, $log, $q) {
  this.data;
  var self = this;

  this.getAllProcesses = function(userId) {
	var result;
	var deferred = $q.defer();
    $http.get('http://localhost:8082/cim-auxservice/processservice/getAllProcesses?user=' + userId)
     .then( function(success) {
    	$log.info(success.data.cimObject);
    	
    	result = success.data.cimObject;
    	deferred.resolve(result);
      }
      , function(error) {
            $log.error('Error: ' + error);
            deferred.reject(error.status);
      });
    
    result = deferred.promise;
	return $q.when(result);
  };
  
  
  	this.getProcess = function(userId, processId) {
		var result;
		var deferred = $q.defer();
	    $http.get('http://localhost:8082/cim-auxservice/processservice/getProcess?user=' + userId + "&processId=" + processId)
	     .then( function(success) {
	    	$log.info(success.data.cimObject);
	    	
	    	result = success.data.cimObject;
	    	deferred.resolve(result);
	      }
	      , function(error) {
	            $log.error('Error: ' + error);
	            deferred.reject(error.status);
	      });
	    
	    result = deferred.promise;
		return $q.when(result);
	  }; 
	  
		  
	  this.startLot = function(userId, lotId, processId) {
			    var result;
				var deferred = $q.defer();
				$http.get('http://localhost:8082/cim-service/cimservice/startLot?user=' + userId  + '&lotId=' + lotId + "&processId="+processId)
					.then(function(success) {
				    	$log.info(success.data);
				    	result = success.data;
				    	deferred.resolve(result);
				     }
				    , function(error) {
				            $log.error('Error: ' + error);
				            deferred.reject(error.status);
				    });
			    result = deferred.promise;
				return $q.when(result);
		  	};
		  	
		  	
	  this.getNextEquipmentsForLot = function(userId, lotId, processId) {
		    var result;
			var deferred = $q.defer();
			$http.get('http://localhost:8082/cim-service/cimservice/getNextEquipmentsForLot?user=' + userId  + '&lotId=' + lotId + "&processId="+processId)
				.then(function(success) {
			    	$log.info(success.data);
			    	result = success.data;
			    	deferred.resolve(result);
			     }
			    , function(error) {
			            $log.error('Error: ' + error);
			            deferred.reject(error.status);
			    });
		    result = deferred.promise;
			return $q.when(result);
	  	};
	  	
	  	
	  this.getLotNextProcessStep = function(userId, lotId) {
		    var result;
			var deferred = $q.defer();
			$http.get('http://localhost:8082/cim-service/cimservice/getLotNextProcessStep?user=' + userId  + '&lotId=' + lotId)
				.then(function(success) {
			    	$log.info(success.data.cimObject);
			    	result = success.data.cimObject;
			    	deferred.resolve(result);
			     }
			    , function(error) {
			            $log.error('Error: ' + error);
			            deferred.reject(error.status);
			    });
		    result = deferred.promise;
			return $q.when(result);
	  	};			  	
		  	
	  this.processLotStep = function(userId, lotId, processId, routeId, equipmentId) {
		    var result;
			var deferred = $q.defer();
			$http.get('http://localhost:8082/cim-service/cimservice/processLotStep?user=' + userId  
								+ '&lotId=' + lotId + "&processId="+processId
								+ '&routeId=' + routeId + "&equipmentId=" + equipmentId)
				.then(function(success) {
			    	$log.info(success.data);
			    	result = success.data;
			    	deferred.resolve(result);
			     }
			    , function(error) {
			            $log.error('Error: ' + error);
			            deferred.reject(error.status);
			    });
		    result = deferred.promise;
			return $q.when(result);
	  	};
		  	
		  	
}
);


//Equipment Service
app.service('EquipmentService', function($http, $log, $q) {
  this.data;
  var self = this;

  this.getAllEquipments = function(userId) {
	var result;
	var deferred = $q.defer();
    $http.get('http://localhost:8082/cim-auxservice/equipmentservice/getAllEquipments?user=' + userId)
     .then( function(success) {
    	$log.info(success.data.cimObject);
    	
    	result = success.data.cimObject;
    	deferred.resolve(result);
      }
      , function(error) {
            $log.error('Error: ' + error);
            deferred.reject(error.status);
      });
    
    result = deferred.promise;
	return $q.when(result);
  };
  
  
  this.isFreeToProcess = function(userId, equipmentId) {
		var result;
		var deferred = $q.defer();
	    $http.get('http://localhost:8082/cim-auxservice/equipmentservice/isFreeToProcess?user=' + userId + "&equipmentId=" + equipmentId)
	     .then( function(success) {
	    	$log.info(success.data.cimObject);
	    	
	    	result = success.data.cimObject;
	    	deferred.resolve(result);
	      }
	      , function(error) {
	            $log.error('Error: ' + error);
	            deferred.reject(error.status);
	      });
	    
	    result = deferred.promise;
		return $q.when(result);
	  };
	  
	  
	  this.ableToProcess = function(userId, equipmentId, lotId) {
			var result;
			var deferred = $q.defer();
		    $http.get('http://localhost:8082/cim-auxservice/equipmentservice/ableToProcess?user=' + userId + "&equipmentId=" + equipmentId + "&lotId=" + lotId)
		     .then( function(success) {
		    	$log.info(success.data.cimObject);
		    	
		    	result = success.data.cimObject;
		    	deferred.resolve(result);
		      }
		      , function(error) {
		            $log.error('Error: ' + error);
		            deferred.reject(error.status);
		      });
		    
		    result = deferred.promise;
			return $q.when(result);
		  };	  
  	
}
);