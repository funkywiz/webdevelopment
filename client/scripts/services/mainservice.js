(function(){
	angular.module('college').factory("MainService",MainService);
	MainService.$inject=['$http'];
	function MainService($http){
		var service={};
		service.verifydata=verifydata;
		return service;
		
		function verifydata(data){
			return $http.post('http:localhost:3000/',data).then(successfunction,failurefunction);
		}
		function loginsubmit(data){
			return $http.post('http:localhost:3000/login',data).then(successfunction,failurefunction);		
		}
		function successfunctiion(data){
			console.log("HANDLED SUCCESSFULLY");
			return data;
		}
		function failurefunction(err){
			console.log(err);
			return err;
		}
	}
})();