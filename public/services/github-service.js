angular.module('app').service('githubService', function($http){


    this.getFollowing = () => {
        return $http.get('http://localhost:3500/api/github/followers').then((res) => {
            return res.data
        })
    }


})