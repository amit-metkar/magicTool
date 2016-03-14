'use strict';

/**
 * @ngdoc function
 * @name ptApp.controller:gpResultCtrl
 * @description
 * # gpResultCtrl
 * Controller of the ptApp
 */
angular.module('ptApp')
    .controller('gpResultCtrl', ['$scope', 'gpStaticContent', '$routeParams', function ($scope, gpStaticContent, $routeParams) {
        $scope.gender = $routeParams.gender;
    }]);