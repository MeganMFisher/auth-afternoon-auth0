angular.module('app').service('githubService', function($http){


    this.getFollowing = () => {
        return $http.get('http://localhost:3000/api/github/followers').then((res) => {
            return res.data
        })
    }


})