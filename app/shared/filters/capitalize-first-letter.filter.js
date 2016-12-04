'use strict';

angular.module('shared').filter('capitalizeFirstLetter', function () {
    return function (input) {
        return input.charAt(0).toUpperCase() + input.slice(1);
    }
});