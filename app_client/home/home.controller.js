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

    vm.data={};
    vm.data.locations=[{
        _id:1, name : 'McDonalds', distance : '5 miles', address : '123 main'
    }, {_id:2, name : 'Burger King', distance : '4 miles', address : '11 main'}]



}

