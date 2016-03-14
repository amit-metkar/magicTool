'use strict';

/**
 * @ngdoc function
 * @name ptApp.directive:noValidationBubble
 * @description
 * # noValidationBubble
 * Directive of the ptApp
 */
angular.module('ptApp')
    .directive('noValidationBubble', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element[0].addEventListener( "invalid", function( event ) {
                    event.preventDefault();
                }, true );
            }
        };
    });