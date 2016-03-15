'use strict';

/**
 * @ngdoc function
 * @name seeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seeApp
 */
angular.module('seeApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.values = {
  		"sme_num": "abc345",
  		"discount_rate": "19"
  	}

  });
