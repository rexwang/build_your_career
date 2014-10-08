'use strict';

/**
 * @ngdoc function
 * @name buildYourCareerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the buildYourCareerApp
 */
angular.module('buildYourCareerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
