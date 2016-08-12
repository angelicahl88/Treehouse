'use strict';

var services = angular.module('TMDb.services', []);

services.factory('TMDbFactory', function($http) {
    function load(path, params) {
        params = params || {};
        params.callback = 'JSON_CALLBACK';
        
        return $http.jsonp('http://api.themoviedb.org/3/' + path + 'api_key=304684708cabe05add57510a6978f029', {params: params});
    }
    
    return {
        list: function(type, params) {
            return load(type + '/popular?', params);
        },
        single: function(type, id) {
            return load(type + '/' + id + '?');
        }
    }
});