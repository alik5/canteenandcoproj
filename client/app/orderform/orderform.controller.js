'use strict';


angular.module('dashboardAppApp')
  .controller('OrderformCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

    

  	$scope.submitEmail = function () {
      
  	  var formData = $scope.email;



      $http.post('/email', formData)
        .success(function (data, status) {
          console.log("Sent ok client " + status);
        })
        .error(function (data, status) {
          console.log("Error client " + status);
          console.log(data);
        })

    }
  

    });