/// <reference path="../plugins/angular/angular.js" />
//create module
var myApp = angular.module('myModule', [])
myApp.controller("schoolController", schoolController);

function schoolController($scope) {
    $scope.message = "This is Hien from school"
}

//myApp.controller("studentController", studentController);
//myApp.controller("teacherController", teacherController);


////myController.$inject = ['$scope'];


////
//function schoolController($scope) {
//    $scope.message = "This is Hien from school"
//}

//function studentController($scope) {
//    //$scope.message = "This is Hien from student"
//}

//function teacherController($scope) {
//    //$scope.message = "This is Hien from teacher"
//}