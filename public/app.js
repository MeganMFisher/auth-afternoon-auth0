angular.module('app', ['ui.router'])



    .config(function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');


        $stateProvider
            .state('login', {
                url: '/',
                template: '<a href="/auth/github">Log in</a>',
                controller: 'testCtrl'
            })
            .state('home', {
                url: '/home',
                templateUrl: './home.html',
                controller: 'homeCtrl'
            })
            .state('friend', {
                url: '/friend/:github_username',
                templateUrl: './friend.html',
                controller: 'friendsCtrl'
            })
 })

        app.config(function ($httpProvider) {
            $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
            $httpProvider.interceptors.push('myHttpInterceptor');

        })

        // register the interceptor as a service
        app.factory('myHttpInterceptor', function () {
            return {
                'responseError': function (rejection) {
                    if (rejection.status == 403) {
                        document.location = '/';
                        return rejection;
                    }
                    return rejection;
                }
            };
        })

   

