'use strict';

/**
 * @ngdoc function
 * @name ptApp.directive:jqDatePicker
 * @description
 * # jqDatePicker
 * Directive of the ptApp
 */
angular.module('ptApp')
    .directive('jqDatePicker', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.datepicker();
            }
        };
    });