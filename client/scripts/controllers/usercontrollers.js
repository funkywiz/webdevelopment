(function(){
	angular.module('college').controller("Usercontrollers",Usercontrollers);
    Usercontrollers.$inject= ['$state','MainService'];
    function Usercontrollers($state,MainService){
    	var ctrl=this;
    	var isLogin=true;
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
        ctrl.SwitchLoginWindow=function(){
            ctrl.isLogin=true;
        }
        ctrl.SwitchRegWindow=function(){
            ctrl.isLogin=false;
        }
        ctrl.submitdata=function(){
            var data={
            fname : ctrl.firstname,
            lname : ctrl.lastname,
            email : ctrl.email,
            cnfemail : ctrl.cnfemail,
            password : ctrl.password,
            cnfpassword : ctrl.cnfpassword
            };
            console.log(data);
            MainService.verifydata(data).then(function(response){
            	if(response.status==200){
            		console.log("VERFIED");
            	}
            });
            data={};
        }
        ctrl.logindata=function(){
            var data ={
            email : ctrl.email,
            password : ctrl.password,
            };
            console.log(data);
            MainService.loginsubmit(data).then(function(response){
                if(response.status==200){
                    console.log("VERFIED");
                }
            });
            data={};
        }
        
    }
})();