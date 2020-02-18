(function () {
  'use strict';

  angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];
  function CounterController($scope, $timeout) {

    $scope.counter = 0;

    $scope.upCounter = function () {
      $timeout(function () {                  //$timeout method 
        $scope.counter++;
        console.log("COUNTER INCREMENTED!!");
      }, 1000);
    };

    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     $scope.$apply(function () {        // $ apply method
    //       $scope.counter++;
    //       console.log("COUNTER INCREMENTED!!");
    //     });
    //   }, 2000);
    // };

    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     $scope.counter++;
    //     console.log("COUNTER INCREMENTED!!");
    //     $scope.$digest();                  //$digest method
    //   }, 2000);

    // };

  };
})();
