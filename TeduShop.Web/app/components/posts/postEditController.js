(function (app) {
    app.controller('postEditController', postEditController);
    postEditController.$inject = ['$scope', 'apiService', 'notificationService', '$state', '$stateParams', 'commonService']
    function postEditController($scope, apiService, notificationService, $state, $stateParams, commonService) {
        $scope.post = {
            CreatedDate: new Date(),
            Status: true
        }
        $scope.UpdatePost = UpdatePost;
        $scope.GetSeoTitle = GetSeoTitle;

        function GetSeoTitle() {
            $scope.post.Alias = commonService.getSeoTitle($scope.post.Name);
        }

        //ckeditor

        $scope.ckeditorOptions = {
            languague: 'vi',
            height: '200px'
        }


        function loadPostDetail() {
            apiService.get('api/post/getbyid/' + $stateParams.id, null, function (result) {
                $scope.post = result.data;
            }, function () {
                notificationService.displayError('Cannot get post detail!');
            });
        }


        function UpdatePost() {
            apiService.put('api/post/update', $scope.post, function (result) {
                notificationService.displaySuccess(result.data.Name + 'đã được cập nhật!');
                $state.go('posts');
            }, function () {
                notificationService.displayError('Cập nhật không thành công!');
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
        loadPostDetail();
        loadPostCategory();
    }
})(angular.module('tedushop.posts'));