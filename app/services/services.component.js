'use strict';

angular.module('services').component('services', {
    templateUrl: "services/services.template.html",
    controller: ['$http', function ServicesController($http) {
        var self = this;

        $http.get('services/services.json').then(
            function successCallback(response) {
                self.services = response.data;
            },
            function failCallback(response) {
                console.log('Error retrieving services data.');
            }
        );
    }]
});