'use strict';

/**
 * @ngdoc function
 * @name ptApp.controller:gPredictorCtrl
 * @description
 * # gPredictorCtrl
 * Controller of the ptApp
 */
angular.module('ptApp')
    .controller('gPredictorCtrl', ['$scope', function ($scope) {
        //set title of the screen
        $scope.$parent.title = "Gender Predictor";

        $scope.clear = function() {
            $scope.dt = null;
        };

        // Disable weekend selection
        function disabled(data) {
            var date = data.date,
                mode = data.mode;
            return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
        }

        $scope.dateOptions = {
            //dateDisabled: disabled,
            formatYear: 'yy',
            showWeeks: false
        };
        $scope.openDatePicker = function() {
            $scope.dateOfBirth.opened = true;
        };

        $scope.format = 'MM/dd/yyyy';
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.dateOfBirth = {
            opened: false
        };

    }]);
