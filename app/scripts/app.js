'use strict';

/**
 * @ngdoc overview
 * @name ptApp
 * @description
 * # ptApp
 *
 * Main module of the application.
 */
angular
    .module('ptApp', [
        'ngAnimate',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/gPredictor', {
                templateUrl: 'views/gPredictor.html',
                controller: 'gPredictorCtrl',
                controllerAs: 'gPredictor'
            })
            .when('/gpResult/:gender', {
                templateUrl: 'views/gpResult.html',
                controller: 'gpResultCtrl',
                controllerAs: 'gpResult'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
    .controller('ptAppCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {
        $rootScope.title = 'Pregnancy Tools';
        $scope.title = $rootScope.title;
    }]);
