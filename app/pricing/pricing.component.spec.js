'use strict';

describe('pricing', function() {

    // Load the module that contains the `itemDetail` component before each test
    beforeEach(module('pricing'));

    // Test the controller
    describe('PricingController', function() {
        var ctrl;

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('pricing');
        }));

        it('should fetch the pricing information', function() {
            expect(ctrl.pricingItems.length).toBe(3);
        });

    });

});
