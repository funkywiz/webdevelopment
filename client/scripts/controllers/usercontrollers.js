(function(){
	angular.module('college')
        .controller("CustomerController",CustomerController);
    CustomerController.$inject= ['MainService','$state','$window'];
    function CustomerController(MainService,state,window){
    	var ctrl=this;
    	ctrl.submit=function(){
    		console.log("submit success");
    	}
    }
})();