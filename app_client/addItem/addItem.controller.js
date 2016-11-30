/**
 * Created by Phil on 11/29/16.
 */
    angular
        .module('bidderApp')
        .controller('addItemCtrl', addItemCtrl);


//** This should be where the user submits a new item. Tried using a form... can't get it to work.//
addItemCtrl.$inject = ['$http'];
    function addItemCtrl($http) {
        var vm = this;
        vm.pageHeader = {
            title: 'Add Item to Bidder App',
            strapline: 'Bid on items for sale online!'
        };
        vm.sidebar = {
            content: "Add a new item to bid on"
        };

        vm.itemForm = {};
            vm.onSubmit = function () {
            console.log(vm.itemForm);
            $http.post('/api/items', vm.itemForm);
            vm.message = "Item Added";
        };
    }

