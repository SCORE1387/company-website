'use strict';

angular.module('contactForm').component('contactForm', {
    templateUrl: "contact-form/contact-form.template.html",
    controller: function ContactFormController() {
        var self = this;

        self.submit = function () {
            if (self.name && self.description && self.comment) {
                alert('Submit comment. Name = ' + self.name + ', Email = ' + self.email + ', Comment = ' + self.comment);
            } else {
                alert('Form not filled')
            }
        }
    }
});