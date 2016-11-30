/**
 * Created by Phil on 11/29/16.
 */
angular
    .module('bidderApp')
    .controller('bidCtrl', bidCtrl);

bidCtrl.$inject = ['$http'];
function bidCtrl ($http) {
    var vm = this;
    vm.pageHeader = {
        title: 'Bidder App',
        strapline: 'Place your bid now!'
    };
    vm.sidebar = {
        content: "Thousands of items for sale... Go get yours!"
    };

    //** This should be allowing the user to place their bid... can't figure out JS.
    vm.data = {};
    vm.postData = function() {
        console.log("sending request");
        $http.post('/api/bids')
            .success(function (d) {
                if (d) {
                    vm.data.bid = d;
                    console.log(vm.data);
                }
                console.log(d);
            })
            .error(function (err) {
                console.log(err);
            });
    };

    vm.postData()};