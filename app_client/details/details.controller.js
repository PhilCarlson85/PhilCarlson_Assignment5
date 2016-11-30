/**
 * Created by Phil on 11/29/16.
 */
angular
    .module('bidderApp')
    .controller('detailsCtrl', detailsCtrl);

detailsCtrl.$inject = ['$http'];
function detailsCtrl ($http) {
    var vm = this;
    vm.pageHeader = {
        title: 'Bidder App',
        strapline: 'Item Details!'
    };
    vm.sidebar = {
        content: "This displays the specific item's details"
    };


    //** This should be pulling the details of the specific item, then allowing the user to add a new bid. //
    vm.data = {};
    vm.getData = function() {
        console.log("sending request");
        $http.get('/api/items')
            .success(function (d) {
                if (d) {
                    vm.data.item = d;
                    console.log(vm.data);
                }
                console.log(d);
            })
            .error(function (err) {
                console.log(err);
            });
    };

    vm.getData()};