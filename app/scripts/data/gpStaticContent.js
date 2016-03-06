'use strict';

/**
 * @ngdoc function
 * @name ptApp.constant:gpStaticContent
 * @description
 * # gpStaticContent
 * Constant of the ptApp
 */
angular.module('ptApp')
    .constant("gpStaticContent", {
        "home": {
            "title": "Magic Tools",
            "message": "Are you excited to predict your baby's gender?",
            "button_text": "YES!!"
        },
        "information": {
            "title": "Gender Predictor",
            "dob_label": "Mother's date of birth",
            "or": "OR",
            "age_label_1": "Mother's age at the time of ",
            "age_label_2": "conception",
            "age_select_label": "select age",
            "age_data": [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45],
            "month_of_conception_label": "Month of conception",
            "month_select_label": "select month",
            "months": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "predict_button_text": "Predict"
        }
    });