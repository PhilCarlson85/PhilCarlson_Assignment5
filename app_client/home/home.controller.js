angular
    .module('bidderApp')
    .controller('homeCtrl', homeCtrl);

function homeCtrl (itemData) {
    var vm = this;
    vm.pageHeader = {
        title: 'Bidder App',
        strapline: 'Bid on items for sale online!'
    };
    vm.sidebar = {
        content: "Thousands of items for sale..."
    };

    vm.data = {};
    vm.getData = function(itemData) {
        console.log("sending request");
        $http.get('/api/items')
            .success(function (d) {
                if (d) {
                    vm.data.items = d;
                    console.log(vm.data);
                }
                console.log(d);
            });
    };

}
