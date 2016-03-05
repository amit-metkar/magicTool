'use strict';

/**
 * @ngdoc function
 * @name ptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ptApp
 */
angular.module('ptApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.$parent.title = "Pregnancy Tools";
  }]);
