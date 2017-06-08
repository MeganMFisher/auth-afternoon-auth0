angular.module('app').controller('homeCtrl', function($scope, githubService,  $rootScope, $state){

    githubService.getFollowing().then(function (response) {
      $scope.followers = response;
      // $rootScope.$on('unauthorized', function () {
      //   $state.go('login')
      // })
    })


})