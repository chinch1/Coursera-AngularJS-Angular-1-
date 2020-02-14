(function () {
  "use strict";

  angular.module("myFirstApp", [])

    .controller("myFirstController", function ($scope) {
      $scope.name = "Nicola Bitetto";
      $scope.sayHello = function () {
        return "Hello Coursera";
      };
    });
})();