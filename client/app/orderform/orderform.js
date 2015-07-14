'use strict';

angular.module('dashboardAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orderform', {
        url: '/orderform',
        templateUrl: 'app/orderform/orderform.html',
        controller: 'OrderformCtrl'
      });
  });

