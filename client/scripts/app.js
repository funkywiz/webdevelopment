(function(){
'use strict';
var states = [
    {
        name: 'landing_page',
             state:
                 {
                     url:'/',
                     templateUrl: '../views/homepage.html',
                     data: {
                         text: "HOME",
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