/// <reference path="../../../assets/admin/lib/angular/angular.js" />

(function () {
    angular.module('tedushop.posts', ['tedushop.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('post', {
            url: "/post",
            templateUrl: "/app/components/post/postListView.html",
            controller: "postListController"
        }).state('add_post', {
            url: "/add_post",
            templateUrl: "/app/components/post/postAddView.html",
            controller: "postAddController"
        }).state('edit_post', {
            url: "/edit_post",
            templateUrl: "/app/components/post/postEditView.html",
            controller: "postEditController"
        })
    }
})();