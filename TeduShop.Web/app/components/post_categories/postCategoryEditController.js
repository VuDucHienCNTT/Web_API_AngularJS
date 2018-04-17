(function (app) {
    app.controller('postCategoryEditController', postCategoryEditController);
    postCategoryEditController.$inject = ['$scope', 'apiService', 'notificationService', '$state', '$stateParams', 'commonService'];

    function postCategoryEditController($scope, apiService, notificationService, $state, $stateParams, commonService) {
        $scope.postCategory = {
            CreatedDate: new Date(),
            Status: true
        }
        $scope.UpdatePostCategory = UpdatePostCategory;
        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.postCategory.Alias = commonService.getSeoTitle($scope.postCategory.Name);
        }

        function loadPostCategoryDetail() {
            apiService.get('api/postcategory/getbyid/' + $stateParams.id, null, function (result) {
                $scope.postCategory = result.data;
            }, function () {
                notificationService.displayError('Cannot get category detail!');
            });
        }

        function UpdatePostCategory() {
            apiService.put('api/postcategory/update', $scope.postCategory, function (result) {
                notificationService.displaySuccess(result.data.Name + ' đã được cập nhật!');
                $state.go('post_categories');
            }, function () {
                notificationService.displayError('Cập nhật không thành công!');
            });
        }

        function loadParentCategory() {
            apiService.get('api/postcategory/getallparents', null, function (result) {
                $scope.parentCategories = result.data;
            }, function () {
                notificationService.displayError('Cannot get list parent!');
            });
        }
        loadParentCategory();
        loadPostCategoryDetail();
    }
})(angular.module('tedushop.post_categories'));