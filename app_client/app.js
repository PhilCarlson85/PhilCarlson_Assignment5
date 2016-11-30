
function config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html',
            controller: 'homeCtrl',
            controllerAs: 'vm'
        })

        .when('/addItem/', {
            templateUrl: 'addItem/addItem.view.html',
            controller: 'addItemCtrl',
            controllerAs: 'vm'
        })

        .when('/item/:itemId', {
            templateUrl: 'detail/detail.view.html',
            controller: 'detailCtrl',
            controllerAs: 'vm'
        })

        .when('/bid/:itemId', {
            templateUrl: 'bid/bid.view.html',
            controller: 'bidCtrl',
            controllerAs: 'vm'
        })

        .otherwise({redirectTo: '/'});
}

//can't get the links to work. Most HTML isn't properly set up, but links not going anywhere//

angular.module('bidderApp', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', config]);
