(function (app) {
    app.controller('postCategoryListController', postCategoryListController);

    postCategoryListController.$inject = ['$scope', 'apiService', 'notificationService', '$ngBootbox'];

    function postCategoryListController($scope, apiService, notificationService, $ngBootbox) {
        $scope.postCategories = [];
        $scope.page = 0;
        $scope.keyword = '';
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.getPostCategories = getPostCategories;
        $scope.deletePostCategory = deletePostCategory;

        function deletePostCategory(id) {
            $ngBootbox.confirm('Bạn có chắc chắn muốn xóa không?').then(function () {

                var config = {
                    params: {
                        id: id
                    }
                }
                apiService.del('api/postcategory/delete', config, function (result) {
                    notificationService.displaySuccess('Xóa thành công!');
                    $scope.getPostCategories();
                }, function () {
                    notificationService.displayError('Xóa không thành công!');
                })
            });
        }

        function search() {
            $scope.getPostCategories();
        }

        function getPostCategories(page) {
            page = page || 0;
            var config = {
                params: {
                    keyword: $scope.keyword,
                    page: page,
                    pageSize: 3
                }
            }
            apiService.get('api/postcategory/getall', config, function (result) {
                if (result.data.TotalCount == 0) {
                    notificationService.displayWarning('Không có bản ghi nào được tìm thấy!');
                }
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