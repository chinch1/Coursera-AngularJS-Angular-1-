(function() {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope) {
    $scope.answer = "";

    $scope.checkDishes = function() {
      var items;

      if ($scope.input) {
        items = $scope.input.split(",");
        items = items.filter(function(item) {
          return item.length > 0;
        });
        if (items.length <= 3) {
          $scope.answer = "Enjoy!";
          $scope.textColor = "Green";
        } else {
          $scope.answer = "Too much!";
        }
      } else {
        $scope.answer = "Please enter data first";
      }
    };
  }
})();
