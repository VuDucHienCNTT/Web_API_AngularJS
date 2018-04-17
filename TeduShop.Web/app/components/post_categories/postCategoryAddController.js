(function (app) {
    app.controller('postCategoryAddController', postCategoryAddController);
    postCategoryAddController.$inject = ['$scope', 'apiService', 'notificationService', '$state', 'commonService'];

    function postCategoryAddController($scope, apiService, notificationService, $state, commonService) {
        $scope.postCategory = {
            CreatedDate: new Date(),
            Status: true
        }
        $scope.AddPostCategory = AddPostCategory;
        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.postCategory.Alias = commonService.getSeoTitle($scope.postCategory.Name);
        }

        function AddPostCategory() {
            apiService.post('api/postcategory/create', $scope.postCategory, function (result) {
                notificationService.displaySuccess(result.data.Name + ' đã được thêm mới!')
                $state.go('post_categories');
            }, function () {
                notificationService.displayError('Thêm mới không thành công!');
            });
        }

        function loadParentCategory() {
            apiService.get('api/postcategory/getallparents', null, function (result) {
                $scope.parentCategories = result.data;
            },function () {
                    notificationService.displayError("Cannot get list parent!");
                });
        }
        loadParentCategory();

    }
})(angular.module('tedushop.post_categories'));