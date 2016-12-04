'use strict';

angular.module('customerQuotes').component('customerQuotes', {
    templateUrl: "customer-quotes/customer-quotes.template.html",
    controller: ['$http', function CustomerQuotesController($http) {
        var self = this;

        $http.get('customer-quotes/customer-quotes.json').then(
            function successCallback(response) {
                self.customerQuotes = response.data;
            },
            function failCallback(response) {
                console.log('Error retrieving customer-quotes data.');
            }
        );
    }]
});