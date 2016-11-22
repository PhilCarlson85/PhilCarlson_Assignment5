angular.module('bidderApp', ['ngRoute']);

function config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'home/home.view.html'
            controller: 'homeCtrl'
        })
        .otherwise({redirectTo: '/'});
}

angular
 .module('bidderApp')
 .config(['$routeProvider', config]);
