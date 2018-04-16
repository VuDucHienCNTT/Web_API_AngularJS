/// <reference path="../../../assets/admin/lib/angular/angular.js" />
(function () {
    angular.module('tedushop.post_categories', ['tedushop.common']).config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider) {
        $stateProvider.state('post_categories', {
            url: "/post_categories",
            templateUrl: "/app/components/post_categories/postCategoryListView.html",
            controller: "postCategoryListController"
        });
    }
})();