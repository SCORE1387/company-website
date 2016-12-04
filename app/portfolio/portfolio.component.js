'use strict';

angular.module('portfolio').component('portfolio', {
    templateUrl: "portfolio/portfolio.template.html",
    controller: function PortfolioController() {
        var self = this;

        self.portfolioItems = [
            {
                name: "Paris",
                description: "Yes, we built Paris",
                imgUrl: "img/paris.jpg"
            },
            {
                name: "New York",
                description: "We built New York",
                imgUrl: "img/newyork.jpg"
            },
            {
                name: "San Francisco",
                description: "Yes, San Fran is ours",
                imgUrl: "img/sanfran.jpg"
            }
        ];
    }
});