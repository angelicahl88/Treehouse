'use strict';

var controllers = angular.module('TMDb.controllers', []);

controllers.controller('MoviesListCtrl', function($scope, TMDbFactory) {
    TMDbFactory.list('movie').then(function(data) {
        $scope.list = data.data;
    });
    
    $scope.loadNextPage = function() {
        TMDbFactory.list('movie', {page: $scope.list.page + 1}).then(function(data) {
            $scope.list.page = data.data.page;
            $scope.list.results = $scope.list.results.concat(data.data.results);
        });
    }
});

controllers.controller('TvListCtrl', function($scope, TMDbFactory) {
    TMDbFactory.list('tv').then(function(data) {
        $scope.list = data.data;
    });
    
    $scope.loadNextPage = function() {
        TMDbFactory.list('tv', {page: $scope.list.page + 1}).then(function(data) {
            $scope.list.page = data.data.page;
            $scope.list.results = $scope.list.results.concat(data.data.results);
        });
    }
});

controllers.controller('MovieCtrl', function($scope, $routeParams, TMDbFactory) {
    var id = $routeParams.id;
    TMDbFactory.single('movie', id).then(function(data) {
        $scope.movie = data.data;
        console.log(data);
    });
    
});

controllers.controller('TvCtrl', function($scope, $routeParams, TMDbFactory) {
    var id = $routeParams.id;
    TMDbFactory.single('tv', id).then(function(data) {
        $scope.tv = data.data;
        console.log(data);
    });
});
