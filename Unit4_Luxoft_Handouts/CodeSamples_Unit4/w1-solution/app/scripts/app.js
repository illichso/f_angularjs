(function () {
    'use strict';

    angular.module('auction', ['ngRoute'])
        .config(['$routeProvider', $routeProvider => {


            var title = page => (page + ' | Auction');

            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'HomeController',
                    controllerAs: 'ctrl',
                    title: title('Home')
                })
                .when('/search', {
                    templateUrl: 'views/search.html',
                    controller: 'SearchController',
                    controllerAs: 'ctrl',
                    title: title('Search')
                })
                .when('/product/:productId', {
                    templateUrl: 'views/product.html',
                    controller: 'ProductController',
                    controllerAs: 'ctrl',
                    title: title('Product Details'),
                    resolve: {
                        product: ['$route', 'ProductService', ($route, productService) => {
                            var productId = parseInt($route.current.params.productId);
                            return productService.getProductById(productId);
                        }]
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
        .run(['$rootScope', $rootScope => {
            $rootScope.$on('$routeChangeSuccess', (event, currentRoute) => {
                $rootScope.pageTitle = currentRoute.title;
            });
        }]);
}());
