angular
    .module('bidderApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl ($scope) {
    $scope.pageHeader = {
        title: 'Bidder',
        strapline: 'Bid on items for sale online!'
    };
    $scope.sidebar = {
        content: "Thousands of items for sale..."
    };
}