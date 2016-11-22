angular
    .module('bidderApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl () {
    var vm = this;
    vm.pageHeader = {
        title: 'Bidder',
        strapline: 'Bid on items for sale online!'
    };
    vm.sidebar = {
        content: "Thousands of items for sale..."
    };
}