'use strict';

angular.module('dashboardAppApp')
  .controller('OrderformCtrl', function($scope) {
    $scope.message = 'Hello';
    $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
   

      $scope.sendTheMail = function() {
        // create a new instance of the Mandrill class with your API key
        var m = new mandrill.Mandrill('X7FOoFP3FLeb4NCqHP0-VQ');
        // Collect Inputs
        var email = document.getElementById('userEmail').value;
        var name = document.getElementById('userName').value;
        var subject = document.getElementById('userSubject').value;
        var message = document.getElementById('userMessage').value;
        var emailBody = "From: " + name + "<br><br>" +  + "Subject: " + subject + "<br><br>" + message;

        var params = {

            "message": {
                "from_email":email,
                "to":[{"email":"alikfitz@gmail.com"}],
                "subject": "New email from website",
                "html": emailBody
            }
        };

        m.messages.send(params);
      };

    });