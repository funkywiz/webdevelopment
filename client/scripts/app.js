(function(){
'use strict';
var states = [
    {
        name: 'Landing_page',
             state:
                 {
                     url:'/',
                     templateUrl: '../views/homepage.html',
                     data: {
                         text: "HOME",
                         visible: false
                     }
                 }
    },
    {
        name: 'Courses',
             state:
                 {
                     url:'/courses',
                     templateUrl: '../views/courses.html',
                     data: {
                         text: "COURSES",
                         visible: false
                     }
                 }
    },
    {
        name: 'Contactus',
             state:
                 {
                     url:'/contactus',
                     templateUrl: '../views/contactus.html',
                     data: {
                         text: "CONTACTUS",
                         visible: false
                     }
                 }
    },
    {
        name: 'Account',
             state:
                 {
                     url:'/account',
                     templateUrl: '../views/account.html',
                     data: {
                         text: "ACCOUNT",
                         visible: false
                     }
                 }
    },
    {
        name: 'Staff',
             state:
                 {
                     url:'/staff',
                     templateUrl: '../views/staff.html',
                     data: {
                         text: "STAFF",
                         visible: false
                     }
                 }
    },
    {
        name: 'Signup',
             state:
                 {
                     url:'/signup',
                     templateUrl: '../views/signup.html',
                     data: {
                         text: "SIGNUP PAGE",
                         visible: false
                     }
                 }
    }

    ];

    var app = angular.module('college', [
        'ui.router'
    ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');

            angular.forEach(states, function(state) {
                $stateProvider.state(state.name, state.state);
            });
        });

})();