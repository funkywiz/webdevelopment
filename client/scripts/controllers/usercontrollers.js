(function(){
	angular.module('college').controller("Usercontrollers",Usercontrollers);
    Usercontrollers.$inject= ['$state','$window','$cookieStore','MainService'];
    function Usercontrollers($state,$window,$cookieStore,MainService){
    	var ctrl=this;
    	var isLogin=true;
        ctrl.Username=false;
        ctrl.checkUsername=function()
        {
                var cookiedata=false;
                cookiedata=$cookieStore.get("Details");
                if(cookiedata)
                {
                    ctrl.Username=cookiedata.fname;
                    return true;
                }
                else{
                    ctrl.Username=false;
                    return false;
                }
        }
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
            		console.log("ACCOUNT CREATED");    
            	} else if(response.status==301)
                {
                    console.log("User is already created");
                }
            });
        }
        ctrl.logindata=function(){
            var data1 ={
            email : ctrl.email,
            password : ctrl.password
            };
            console.log(data1);
            MainService.loginsubmit(data1).then(function(response){
                if(response.status==200){
                    console.log('The details loginned details are');
                    console.log(response.data);
                    console.log(typeof(response.data));
                    $cookieStore.put("Details",response.data);
                    console.log('Getting-data');
                    var data=$cookieStore.get("Details".name);
                    console.log(data);
                    console.log(typeof(data));
                    console.log("VERFIED");
                }
                else if(response.status==402)
                {
                    console.log("User Does not exist");
                }
                else if(response.status==401)
                {
                    console.log("Password is incorrect");
                }
            });
        }
        ctrl.logout=function()
        {
            var token=$cookieStore.get("Details");
            console.log(token._id);
            console.log(typeof(token._id));
            var jsondata={
                userid : token._id
            }    
            MainService.logoutuser(jsondata).then(function(response){
                    if(response.status==200)
                    {
                        alert("Signout Sucess");
                        $cookieStore.remove("Details");
                        $state.go('Landing_page');
                    }else if (response.status==403){
                        alert("Error in the Signout data");
                    }
                    else
                    {
                        alert("Already Signed out");
                        $state.go('Landing_page');
                    }
            });
        }
        
    }
})();