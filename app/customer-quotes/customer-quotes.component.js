'use strict';

angular.module('customerQuotes').component('customerQuotes', {
    templateUrl: "customer-quotes/customer-quotes.template.html",
    controller: function CustomerQuotesController() {
        var self = this;

        self.customerQuotes = [
            {
                quote: "\"This company is the best. I am so happy with the result!\"",
                author: "Michael Roe, Vice President, Comment Box"
            },
            {
                quote: "\"One word... WOW!!\"",
                author: "John Doe, Salesman, Rep Inc"
            },
            {
                quote: "\"Could I... BE any more happy with this company?\"",
                author: "Chandler Bing, Actor, FriendsAlot"
            }
        ];
    }
});