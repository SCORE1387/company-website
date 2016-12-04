'use strict';

angular.module('subscribeForm').component('subscribeForm', {
    templateUrl: "subscribe-form/subscribe-form.template.html",
    controller: function SubscribeFormController() {
        var self = this;

        self.subscribe = function () {
            alert(self.email + ' subscribed successfully');
        }
    }
});