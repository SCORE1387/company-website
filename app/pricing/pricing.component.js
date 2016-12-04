'use strict';

angular.module('pricing').component('pricing', {
    templateUrl: "pricing/pricing.template.html",
    controller: function PricingController() {
        var self = this;

        self.signUp = function (pricingName) {
            alert("Signed Up for " + pricingName + " plan.")
        }

        self.pricingItems = [
            {
                name: "Basic",
                lorem: 20,
                ipsum: 15,
                dolor: 5,
                sit: 2,
                amet: "Endless",
                price: 19
            },
            {
                name: "Pro",
                lorem: 50,
                ipsum: 25,
                dolor: 10,
                sit: 5,
                amet: "Endless",
                price: 29
            },
            {
                name: "Premium",
                lorem: 100,
                ipsum: 50,
                dolor: 25,
                sit: 10,
                amet: "Endless",
                price: 49
            }
        ];
    }
});