'use strict';
var angular = require('angular');
var app = angular.module('TMDb', ['TMDb.controllers', 'TMDb.filters', 'TMDb.services', require('angular-route')]);

app.config(function($routeProvider) {
     $routeProvider
        .when('/movie', {
            controller: 'MoviesListCtrl',
            templateUrl: 'partials/movies_list.html'
        })
        .when('/tv', {
            controller: 'TvListCtrl',
            templateUrl: 'partials/tv_list.html'
        })
        .when('/movie/:id', {
            controller: 'MovieCtrl',
            templateUrl: 'partials/movie.html'
        })
        .when('/tv/:id', {
            controller: 'TvCtrl',
            templateUrl: 'partials/tv.html'
        })
        .otherwise({
            redirectTo: "/movie"
        });
});