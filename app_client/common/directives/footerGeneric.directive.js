/**
 * Created by Phil on 11/29/16.
 */
(function () {
    angular
        .module('bidderApp')
        .directive('footerGeneric', footerGeneric);

    function footerGeneric () {
        return {
            restrict: 'EA',
            templateUrl: '/common/directives/footerGeneric/footerGeneric.template.html'
        };
    }

})();