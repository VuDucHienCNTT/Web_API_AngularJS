/// <reference path="../plugins/angular/angular.js" />
//create module
var myApp = angular.module('myModule', [])

myApp.controller("schoolController", schoolController);
//myApp.controller("studentController", studentController);


////myController.$inject = ['$scope'];

//
function schoolController($scope) {
    $scope.message = "School";
    $scope.message1 = "ST";
    $scope.btnCheck = function () {
        $scope.message1 = "Student";

    }
}