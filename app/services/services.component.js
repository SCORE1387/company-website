'use strict';

angular.module('services').component('services', {
    templateUrl: "services/services.template.html",
    controller: function ServicesController() {
        var self = this;

        self.services = [
            {
                name: "POWER",
                description: "Lorem ipsum dolor sit amet..",
                imgClass: "glyphicon-off"
            },
            {
                name: "LOVE",
                description: "Lorem ipsum dolor sit amet..",
                imgClass: "glyphicon-heart"
            },
            {
                name: "POWER",
                description: "Lorem ipsum dolor sit amet..",
                imgClass: "glyphicon-lock"
            },
            {
                name: "GREEN",
                description: "Lorem ipsum dolor sit amet..",
                imgClass: "glyphicon-leaf"
            },
            {
                name: "CERTIFIED",
                description: "Lorem ipsum dolor sit amet..",
                imgClass: "glyphicon-certificate"
            },
            {
                name: "HARD WORK",
                description: "Lorem ipsum dolor sit amet..",
                imgClass: "glyphicon-wrench"
            },
        ];
    }
});