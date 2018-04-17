(function (app) {
    app.controller('postCategoryListController', postCategoryListController);

    postCategoryListController.$inject = ['$scope', 'apiService', 'notificationService'];

    function postCategoryListController($scope, apiService, notificationService) {
        $scope.postCategories = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.getPostCategories = getPostCategories;

        function getPostCategories(page) {
            page = page || 0;
            var config = {
                params: {
                    page: page,
                    pageSize: 1
                }
            }

            apiService.get('/api/postcategory/getall', config, function (result) {
                $scope.postCategories = result.data.Items;
                $scope.page = result.data.Page;
                $scope.pagesCount = result.data.TotalPages;
                $scope.totalCount = result.data.TotalCount;
            }, function () {
                notificationService.displayError('Load postcategory failed!');
            });
        }
        $scope.getPostCategories();
    }

})(angular.module('tedushop.post_categories'));