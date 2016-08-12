'use strict';

var filters = angular.module('TMDb.filters', []);

filters.filter('TMDbDate', function($filter) {
    return function(value, format) {
        if (value) {
        value = Date.parse(value);
        }
        return $filter('date')(value, format);
    }
});