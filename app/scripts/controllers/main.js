'use strict';

/**
 * @ngdoc function
 * @name ptApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ptApp
 */
angular.module('ptApp')
  .controller('MainCtrl', ['$scope', 'gpStaticContent', function ($scope, gpStaticContent) {
        $scope.staticContent = gpStaticContent;
        $scope.$parent.title = $scope.staticContent.home.title;
  }]);
