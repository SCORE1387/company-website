'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('Site Template Application', function() {

    it('should not redirect `index.html` anywhere', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toBe('');
    });

});
