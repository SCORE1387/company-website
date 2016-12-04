'use strict';

angular.module('portfolio').component('portfolio', {
    templateUrl: "portfolio/portfolio.template.html",
    controller: ['$http', function PortfolioController($http) {
        var self = this;

        $http.get('portfolio/portfolio.json').then(
            function successCallback(response) {
                self.portfolioItems = response.data;
            },
            function failCallback(response) {
                console.log('Error retrieving portfolio data.');
            }
        );
    }]
});