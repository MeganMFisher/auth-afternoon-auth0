angular.module('app').controller('homeCtrl', function($scope, githubService){

$scope.friends = githubService.getFollowing()

})