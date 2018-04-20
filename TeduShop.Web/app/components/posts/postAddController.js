(function (app) {
    app.controller('postAddController', postAddController);
    postAddController.$inject = ['$scope', 'apiService', 'notificationService', '$state', 'commonService']
    function postAddController($scope, apiService, notificationService, $state, commonService) {
        $scope.post = {
            CreatedDate: new Date(),
            Status: true
        }
        $scope.AddPost = AddPost;
        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.post.Alias = commonService.getSeoTitle($scope.post.Name);
        }

        //ckeditor

        $scope.ckeditorOptions = {
            languague: 'vi',
            height: '200px'
        }

        function AddPost() {
            apiService.post('api/post/create', $scope.post, function (result) {
                notificationService.displaySuccess(result.data.Name + 'đã được thêm mới!');
                $state.go('posts');
            }, function () {
                notificationService.displayError('Thêm mới không thành công!');
            })
        }


        function loadPostCategory() {
            apiService.get('api/postcategory/getallparents', null, function (result) {
                $scope.postCategories = result.data;
            }, function () {
                notificationService.displayError('Cannot get list post category!');
            });
        }

        $scope.ChooseImage = function () {
            var finder = new CKFinder();
            finder.selectActionFunction = function (fileUrl) {
                $scope.$apply(function () {
                    $scope.post.Image = fileUrl;
                })
            }
            finder.popup();
        }

        loadPostCategory();
    }
})(angular.module('tedushop.posts'));