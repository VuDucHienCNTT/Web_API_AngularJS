(function (app) {
    app.controller('productAddController', productAddController);

    productAddController.$inject = ['$scope', 'apiService', 'notificationService', '$state', 'commonService'];

    function productAddController($scope, apiService, notificationService, $state, commonService) {
        $scope.product = {
            CreatedDate: new Date(),
            Status: true
        }
        //ckeditor
        $scope.ckeditorOptions = {
            languague: 'vi',
            height: '200px'
        }

        $scope.AddProduct = AddProduct;
        $scope.GetSeoTitle = GetSeoTitle;

        

        function GetSeoTitle() {
            $scope.product.Alias = commonService.getSeoTitle($scope.product.Name);
        }

        function AddProduct() {
            apiService.post('api/product/create', $scope.product, function (result) {
                notificationService.displaySuccess(result.data.Name + ' đã được thêm mới!');
                $state.go('product');
            }, function () {
                notificationService.displayError('Thêm mới không thành công!');
            });
        }

        function loadProductCategory() {
            apiService.get('api/productcategory/getallparents', null, function (result) {
                $scope.productCategories = result.data;
            }, function () {
                notificationService.displayError('Cannot get list product category!');
            });
        }

        $scope.ChooseImage = function () {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.product.Image = fileUrl;
            }
            finder.popup();
        }

        loadProductCategory();
    }
})(angular.module('tedushop.products'));