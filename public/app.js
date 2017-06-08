angular.module('app', ['ui.router'])



.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './templates/login.html',
        })

        .state('home', {
            url: '/home',
            templateUrl: './templates/home.html',
        })

        .state('friend', {
            url: '/',
            templateUrl: './templates/friend.html',
        })

})