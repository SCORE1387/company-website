'use strict';

angular.
  module('companySiteApp').
  config(['$locationProvider',
    function config($locationProvider) {
      $locationProvider.hashPrefix('!');
    }
  ]);
