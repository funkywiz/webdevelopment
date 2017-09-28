(function(){
	angular.module('college').controller("Usercontrollers",Usercontrollers);
    Usercontrollers.$inject= ['MainService','$state','$window'];
    function Usercontrollers(MainService,state,window){
    	var ctrl=this;
    	ctrl.travcourses=function(){
    		console.log("submit success");
    		$state.go('Courses');
    	}
    }
})();