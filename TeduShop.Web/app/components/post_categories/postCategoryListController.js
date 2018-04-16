(function (app) {
    app.controller('postCategoryListController', postCategoryListController);

    postCategoryListController.$inject = ['$scope', 'apiService', 'notificationService'];

    function postCategoryListController($scope, apiService, notificationService) {
        $scope.postCategories = [];

        apiService.get('/api/postcategory/getall', null, function (result) {
            $scope.postCategories = result.data;
        }, function () {
            notificationService.displayError('Load postcategory failed!');
        });
    }

})(angular.module('tedushop.post_categories'));