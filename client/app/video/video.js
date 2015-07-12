//angular.module('dashboardAppApp',['fxInstagram']);
'use strict';

angular.module('dashboardAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('video', {
        url: '/video',
        templateUrl: 'app/video/video.html',
        controller: 'VideoCtrl'
      });
  });


