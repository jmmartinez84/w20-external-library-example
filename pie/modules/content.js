define([
    '{angular}/angular',
    '{angular-resource}/angular-resource',
    '{angular-date-range-picker}/angular-date-range-picker.min',
    '[css]!{angular-date-range-picker}/angular-date-range-picker'

], function(angular) {
    'use strict';

	var module = angular.module('content', ['ngResource','dateRangePicker']);

    module.factory('DataService', [ '$resource', function($resource) {
        return  $resource(require.toUrl('{pie}/data/data.json'));
    }]);

	module.controller('ContentController', [ '$scope', '$timeout', 'DataService', function($scope, $timeout,  dataService) {

        dataService.get(function (data) {
            $scope.version = data.version;
           
        });
        $scope.dates = moment().range("2012-11-05", "2013-01-25")
      
              
    }]);
    

	return {
		angularModules : [ 'content' ]
	};
});
