(function(){
	angular.module('college').controller("Usercontrollers",Usercontrollers);
    Usercontrollers.$inject= ['$state'];
    function Usercontrollers($state){
    	var ctrl=this;
    	ctrl.travcourses=function(){
    		console.log("SUCCESS");
    		$state.go('Courses');
    	}
    	ctrl.travlandingpage=function(){
    		console.log("SUCCESS");
    		$state.go('Landing_page');
    	}
    	ctrl.travstaff=function(){
    		console.log("SUCCESS");
    		$state.go('Staff');
    	}
    	ctrl.travaccount=function(){
    		console.log("SUCCESS");
    		$state.go('Account');
    	}
    	ctrl.travcontactus=function(){
    		console.log("SUCCESS");
    		$state.go('Contactus');
    	}
    	ctrl.travsignup=function(){
    		console.log("SUCCESS");
    		$state.go('Signup');
    	}
    }
})();