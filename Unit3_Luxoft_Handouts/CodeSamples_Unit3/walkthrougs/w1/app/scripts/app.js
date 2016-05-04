(function () {
    'use strict';

    angular.module('auction', ['ngRoute'])
        .config(['$routeProvider', function ($routeProvider) {
            // STEP 2A
            var title = function (page) {
                return page + ' | Auction';
            };
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl',
                    // STEP 2B
                    title: title('Home')
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchController',
                    controllerAs: 'ctrl',
                    // STEP 2B
                    title: title('Search')
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
        // STEP 2C
        // STEP 2D
        // STEP 2E
        .run(['$rootScope', function ($rootScope) {
            $rootScope.$on('$routeChangeSuccess', function (event, currentRoute) {
                $rootScope.pageTitle = currentRoute.title;
            });
        }]);
}());
