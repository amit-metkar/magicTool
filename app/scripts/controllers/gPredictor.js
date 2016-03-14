'use strict';

/**
 * @ngdoc function
 * @name ptApp.controller:gPredictorCtrl
 * @description
 * # gPredictorCtrl
 * Controller of the ptApp
 */
angular.module('ptApp')
    .controller('gPredictorCtrl', ['$scope', 'gpStaticContent', 'genderPredictorConstant', '$location', function ($scope, gpStaticContent, genderPredictorConstant, $location) {
        $scope.staticContent = gpStaticContent;

        //set title of the screen
        $scope.$parent.title = $scope.staticContent.information.title;

        $scope.ageData = $scope.staticContent.information.age_data;
        $scope.selectedAge = null;//$scope.staticContent.information.age_select_label;
        $scope.months = $scope.staticContent.information.months;
        $scope.selectedMonth = null;//$scope.staticContent.information.month_select_label;
        $scope.clearDOB = function () {
            $scope.selectedDOB = null;
        };
        $scope.clearAge = function () {
            $scope.selectedAge = $scope.staticContent.information.age_select_label;
        };
        $scope.$watch('selectedDOB', function (newValue, oldValue) {
            //if (newValue != oldValue && newValue !== null && $scope.selectedAge !== $scope.staticContent.information.age_select_label) {
            if (newValue != oldValue && newValue !== null && $scope.selectedAge !== null) {
                $scope.clearAge();
            }
        });
        $scope.$watch('selectedAge', function (newValue, oldValue) {
            //if (newValue != oldValue && newValue !== $scope.staticContent.information.age_select_label && $scope.selectedDOB !== null) {
            if (newValue != oldValue && newValue !== null && $scope.selectedDOB !== null) {
                $scope.clearDOB();
            }
        });

        $scope.validateDOB = function () {
            //return !($scope.selectedAge !== $scope.staticContent.information.age_select_label);
            return !($scope.selectedAge !== null);

        };

        $scope.validateAge = function () {
            return !($scope.selectedDOB !== null);
        };

        $scope.predictorGender = function () {
            $location.path("gpResult/" + genderPredictorConstant.table[$scope.selectedAge][$scope.selectedMonth]);
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
        $scope.openDatePicker = function () {
            $scope.dateOfBirth.opened = true;
        };

        $scope.format = 'MM/dd/yyyy';
        $scope.altInputFormats = ['M!/d!/yyyy'];

        $scope.dateOfBirth = {
            opened: false
        };

    }]);
